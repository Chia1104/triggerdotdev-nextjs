import { createAppRoute } from "@trigger.dev/nextjs";
import { client } from "@/jobs/trigger.factory";
import "@/jobs";

export const { POST, dynamic } = createAppRoute(client);
