import { TriggerClient } from "@trigger.dev/sdk";
import { Github } from "@trigger.dev/github";
import PackageJSON from "../../package.json" with { type: "json" };

export const client = new TriggerClient({
  id: PackageJSON.name,
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

export const github = new Github({
  id: "github",
  token: process.env.GITHUB_TOKEN,
});
