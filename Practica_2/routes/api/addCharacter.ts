import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  POST: async (req: Request) => {
    const body = await req.json();
    let { name, image, sound, creator } = body;
    if (name === "") name = undefined;
    if (image === "") image = undefined;
    if (sound === "") sound = undefined;
    if (creator === "") sound = undefined;
    const response = await fetch("https://supermondongo.deno.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        image: image,
        sound: sound,
        creator: creator,
      }),
    });
    return response;
  },
};
