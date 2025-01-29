import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { environment } from "@zuplo/runtime";

// Create Supabase client
const supabase = createClient(
  environment.SUPABASE_URL,
  environment.SUPABASE_SERVICE_ROLE
);

// Function to create a single UUID in the database
export async function createUUID() {
  const { data, error } = await supabase
    .from("uuids")
    .insert([{ id: uuidv4() }]);

  if (error) {
    throw new Error(`Error creating UUID: ${error.message}`);
  }

  return data;
}

// Function to create multiple UUIDs in the database
export async function createUUIDBatch(count: number) {
  const uuids = Array.from({ length: count }, () => ({ id: uuidv4() }));

  const { data, error } = await supabase
    .from("uuids")
    .insert(uuids);

  if (error) {
    throw new Error(`Error creating UUID batch: ${error.message}`);
  }

  return data;
}

// Function to create a UUID with metadata in the database
export async function createUUIDWithMetadata(metadata: object) {
  const { data, error } = await supabase
    .from("uuids")
    .insert([{ id: uuidv4(), metadata }]);

  if (error) {
    throw new Error(`Error creating UUID with metadata: ${error.message}`);
  }

  return data;
}
