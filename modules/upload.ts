import {
  Logger,
  ZuploContext,
  ZuploRequest,
  environment,
} from "@zuplo/runtime";
import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabase = createClient(
  environment.SUPABASE_URL,
  environment.SUPABASE_SERVICE_ROLE
);

// Upload file using standard upload
async function uploadFile(file: File, name: string, logger: Logger) {
  try {
    const { data, error } = await supabase.storage.from("files").upload(name, file);

    if (error) {
      logger.error("An error happened uploading file: ", error);
      return null;
    }

    logger.info("File uploaded: ", data);

    return data;
  } catch (error) {
    // Handle error
    logger.error("An error happened uploading file: ", error);
    return null;
  }
}

export default async function (request: ZuploRequest, context: ZuploContext) {
  const formData = await request.formData();

  const file = formData.get("trackFile");
  const name = formData.get("name");
  const unreleased = formData.get("unreleased");
  const duration = formData.get("duration");

  if (!file || !(file instanceof File)) {
    return JsonErrorResponse(`Propery "file" not found, or not a file`);
  }

  if (!name || typeof name !== "string") {
    return JsonErrorResponse(`Propery "name" not found, or not a string`);
  }

  if (!unreleased || (unreleased !== "true" && unreleased !== "false")) {
    return JsonErrorResponse(
      `Propery "unreleased" not found, or not a boolean`
    );
  }

  if (!duration || typeof duration !== "string") {
    return JsonErrorResponse(`Propery "duration" not found, or not a string`);
  }

  const uploadResult = await uploadFile(file, context.log);

  if (!uploadResult) {
    return JsonErrorResponse(`An error happened uploading file`);
  }

  const { error: insertError } = await supabase.from("tracks").insert({
    name,
    unreleased: unreleased === "true",
    duration,
  });

  if (insertError) {
    context.log.error("An error happened inserting track: ", insertError);
    return JsonErrorResponse(`An error happened inserting track`, 500);
  }

  return { message: "Track added successfully!" };
}

const JsonErrorResponse = (message: string, status?: number) => {
  return new Response(JSON.stringify({ message }), {
    status: status || 400,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
