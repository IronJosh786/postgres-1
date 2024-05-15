import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

export async function getClient() {
  const client = new Client(`${process.env.DATABASE_URL}`);
  await client.connect();
  return client;
}
