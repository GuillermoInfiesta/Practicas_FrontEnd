import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import { CharacterParams } from "../components/Character.tsx";
import Character from "../components/Character.tsx";
import SearchComponent from "../components/SearchComponent.tsx";

export const handler: Handlers = {
  GET: async (
    _req: Request,
    ctx: FreshContext<unknown, Promise<CharacterParams[]>>,
  ) => {
    const url = new URL(ctx.url);
    const name = url.searchParams.get("name") || undefined;
    if (name === undefined) return ctx.render();
    const res = await fetch(
      `https://supermondongo.deno.dev/${name}`,
    );
    if (res.status !== 200) {
      throw new Error("a");
    }
    const data = await res.json();
    return ctx.render(data);
  },
};
const Page = (props: PageProps) => {
  const characters = props.data || [];
  return <SearchComponent characters={characters} />;
};
export default Page;
