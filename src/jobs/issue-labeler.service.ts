import { client, github } from "./trigger.factory";
import { events } from "@trigger.dev/github";
import PackageJSON from "../../package.json" with { type: "json" };

client.defineJob({
  id: "github-integration-on-issue-opened",
  name: "GitHub Integration - On Issue Opened",
  version: "0.1.0",
  integrations: { github },
  trigger: github.triggers.repo({
    event: events.onIssueOpened,
    owner: PackageJSON.author.name,
    repo: PackageJSON.name,
  }),
  run: async (payload, io, ctx) => {
    await io.github.addIssueAssignees("add assignee", {
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issueNumber: payload.issue.number,
      assignees: [PackageJSON.author.name],
    });

    await io.github.addIssueLabels("add label", {
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issueNumber: payload.issue.number,
      labels: ["bug"],
    });

    return { payload, ctx };
  },
});
