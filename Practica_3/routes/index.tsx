import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { LoverCard } from "../components/LoverCard.tsx";
import { HomePage } from "../islands/HomePage.tsx";
import { Lover } from "../Types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Promise<Lover[]>>) => {
    const response = await fetch("https://lovers.deno.dev/");
    const data = await response.json();
    return ctx.render(data);
  },
};
export default function Home(props: PageProps) {
  const a: Lover = props.data[0];
  //console.log(a);
  /*return (
    <div class="main">
      <LoverCard
        name="a"
        age={3}
        password="a"
        sex="a"
        description="a"
        hobbies={[]}
        photo="https://img.freepik.com/foto-gratis/concepto-emociones-personas-foto-cabeza-hombre-atractivo-feliz-riendo-sonriendo-exprese-regocijo_1258-26742.jpg"
        comments={[]}
      />
    </div>
  );*/
  return (
    <div>
      <HomePage lovers={props.data} />
    </div>
  );
}
