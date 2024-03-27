import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  DELETE: async (req: Request) => {
    const body = await req.json();
    const response = await fetch(
      `https://supermondongo.deno.dev/${body.name}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ creator: body.creator }),
      },
    );
    return response;
  },
};
