import { eventTrigger } from "@trigger.dev/sdk";
import { client } from "./trigger.factory";

client.defineJob({
  id: "hello-job",
  name: "Hello Job",
  version: "0.0.1",
  trigger: eventTrigger({
    name: "hello.event",
  }),
  run: async (payload, io) => {
    await io.logger.info("Hello world!", { payload });

    return {
      message: "Hello world!",
    };
  },
});
