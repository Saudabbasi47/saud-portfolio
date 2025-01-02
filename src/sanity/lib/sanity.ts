import { createClient } from "next-sanity";

export const client = createClient({
  projectId:"pzcfg2mn",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});
