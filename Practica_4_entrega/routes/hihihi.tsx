import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Shower from "../components/Shower.tsx";
import HiButton from "../islands/HiButton.tsx";
import { HiForm } from "../islands/SayHiForm.tsx";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    console.log("rendering");
    const name = url.searchParams.get("nombre");
    return ctx.render({ name });
  },
};

const Hihihi = (props: PageProps) => {
  const SayHi = useSignal<string>("");
  const apellido = useSignal<string>("");
  return <HiForm />;
};

export default Hihihi;
