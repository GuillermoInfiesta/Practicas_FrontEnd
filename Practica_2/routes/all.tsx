import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown>): Promise<any> => {
    const response = await fetch("https://supermondongo.deno.dev/");
    const data = await response.json();
    return ctx.render(data);
  },
  /*DELETE: async (_req: Request, ctx: FreshContext<unknown>) => {
    const url = new URL(ctx.url);
    const name = url.searchParams.get("name");
    const creator = url.searchParams.get("creator");
    const response = await fetch(`https://supermondongo.deno.dev/${name}`, {
      method: "delete",
      body: JSON.stringify({ creator: creator }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.status);

    if (response.status !== 204) {
      return new Response("Error");
    }
    return new Response("Personaje eliminado");
  },*/
};
const Page = (props: PageProps) => {
  const characters = props.data;
  return (
    <div>
      <h1>Resultados:</h1>
      <Characters characters={characters} />
    </div>
  );
};

export default Page;
