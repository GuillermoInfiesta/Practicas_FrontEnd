import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Popup } from "../components/popup.tsx";
import Video from "../components/Video.tsx";

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
        <h2>More about MordeTwi</h2>
        <div class="flex">
          <Video
            tittle="4K Version"
            source="https://www.youtube.com/embed/zx0gm3ZaASs?si=TQAdlZvB97oyJ9Hl"
          >
          </Video>
          <Video
            tittle="Long Version"
            source="https://www.youtube.com/embed/jMCon8VTh7k?si=IZG27g6wsibZ92I-"
          >
          </Video>
          <Video
            tittle="Best Version"
            source="https://www.youtube.com/embed/irT88XcjpA4?si=stxLMpqwj-DFBD9c"
          >
          </Video>
        </div>
      </div>
    </div>
  );
};

export default Page;
