import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../../components/Characters.tsx";
import CharactersSearch from "../../islands/CharactersSearch.tsx";
import { CharacterParams } from "../../components/Character.tsx";
/*
const Page = (props: PageProps) => {
  return (
    <div>
      <CharactersSearch />
    </div>
  );
};
*/

export const handler: Handlers = {
  GET: async (
    _req: Request,
    ctx: FreshContext<unknown, Promise<CharacterParams[]>>,
  ) => {
    const url = new URL(ctx.url);
    const name = url.searchParams.get("name") || "";
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
  return (
    <div>
      <form action="/search/a">
        <input type="text" name="name" />
        <button>Submit</button>
      </form>
      <Characters characters={characters} />
    </div>
  );
};
export default Page;
