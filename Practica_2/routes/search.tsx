import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import { CharacterParams } from "../components/Character.tsx";
import Character from "../components/Character.tsx";

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
  return (
    <div>
      <div class="search-form">
        <h2>¿Quién salvará el mundo hoy?</h2>
        <form class="form" action="/search">
          <input type="text" name="name" placeholder="Nombre" />
          <button>
            <img
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
              alt="Al rescate"
            />
          </button>
        </form>
      </div>
      {characters.length === 0 && (
            <div class="not-found-message">
              Malas noticias... Espero que sepas pelear, porque parece que te
              toca ser el heroe hoy
            </div>
          ) ||
        (
          <div class="search-display">
            <div class="search-results">
              <h3>Todas las coincidencias</h3>
              <div class="links">
                {characters.map((ch: CharacterParams) => (
                  <a href={`/search/?name=${ch.name}`}>
                    {ch.name}
                  </a>
                ))}
              </div>
            </div>
            <div class="full-width">
              {characters.length !== 0 && (
                <Character
                  name={characters[0].name}
                  image={characters[0].image}
                  sound={characters[0].sound}
                />
              )}
            </div>
          </div>
        )}
    </div>
  );
};
export default Page;
