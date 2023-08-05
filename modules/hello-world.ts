import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const formData = await request.formData();

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  return "What zup?";
}
