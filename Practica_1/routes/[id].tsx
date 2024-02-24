import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Popup } from "../components/popup.tsx";
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
    <div class="main">
      <div class="tittle">
        <p>ITS TIME TO KNOW YOUR DAILY SAYING.</p>{" "}
        <p>LETS GOOOOOOOO!=!=!=!=!=!</p>
      </div>
      <div class="main-flex">
        <div class="side-panel flex-end">
          <text class="running-text">Try and catch me</text>
        </div>
        <div class="quote-display flex">
          <image
            class="quote-image"
            src="https://i.pinimg.com/originals/8f/d8/2a/8fd82af202ad61b0d6bc9d790b2db064.jpg"
          />
          <text class="quote-text">{quote}</text>
        </div>
        <div class="side-panel flex-start">
          <Popup />
        </div>
      </div>
      <div class="videos-display">
        <h2>Origen del Romance</h2>
        <div>
          <iframe
            width="33%"
            height="315"
            src="https://www.youtube.com/embed/S6ff6_beeHY?si=AYBbwAabvfolB-Vh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay;"
            allowfullscreen
          >
            V1
          </iframe>
          <iframe
            width="33%"
            height="315"
            src="https://www.youtube.com/embed/zx0gm3ZaASs?si=TQAdlZvB97oyJ9Hl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay;"
            allowfullscreen
          >
            V2
          </iframe>
          <iframe
            width="34%"
            height="315"
            src="https://www.youtube.com/embed/irT88XcjpA4?si=stxLMpqwj-DFBD9c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay;"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
