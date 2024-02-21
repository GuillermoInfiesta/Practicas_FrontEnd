import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, string>) => {
    try {
      const url = "https://learnyourlesson.deno.dev/";
      const id = ctx.params.id;
      const response = await Axios.get<string>(`${url}${id}`);
      if (response.status !== 200) {
        throw new Error(`Error al hace fetch de la api`);
      }

      return ctx.render(response.data);
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

const Page = (props: PageProps<string>) => {
  const quote = props.data;
  return (
    <div class="bg-mordecai flex" style="height: 800px">
      <div class="quote-display">
        <image
          class="quote-image"
          src="https://i.pinimg.com/originals/8f/d8/2a/8fd82af202ad61b0d6bc9d790b2db064.jpg"
        />
        <text class="quote-text">{quote}</text>
      </div>
    </div>
  );
};

export default Page;
