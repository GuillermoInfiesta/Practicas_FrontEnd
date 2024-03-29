import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown>): Promise<any> => {
    const response = await fetch("https://supermondongo.deno.dev/");
    const data = await response.json();
    return ctx.render(data);
  },
};
const Page = (props: PageProps) => {
  const characters = props.data;
  //h1 resultados
  return (
    <div>
      <Characters characters={characters} />
    </div>
  );
};

export default Page;
