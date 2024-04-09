import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { LoverCard } from "../components/LoverCard.tsx";
import { Header } from "../islands/Header.tsx";
import { HomePage } from "../islands/HomePage.tsx";
import { Lover } from "../Types.ts";
import { useSignal } from "@preact/signals";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Promise<Lover[]>>) => {
    const response = await fetch("https://lovers.deno.dev/");
    const data = await response.json();
    return ctx.render(data);
  },
};
export default function Home(props: PageProps) {
  const logged_in = useSignal<boolean>(false);
  return (
    <div class="width-100">
      <Header logged={logged_in} />
      <HomePage lovers={props.data} logged={logged_in} />
    </div>
  );
}
