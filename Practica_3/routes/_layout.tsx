import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Header } from "../islands/Header.tsx";
import { useSignal } from "@preact/signals";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown>) => {
    //Check cookies
    //Si hay cookie pasar esos valores, si no la hay mandar un false y ya
    return ctx.render();
  },
};
const Layout = (props: PageProps) => {
  const Component = props.Component;
  const login = useSignal<boolean>(false);
  return (
    <div class="width-max">
      <Header logged={login} />
      <Component />
    </div>
  );
};
export default Layout;
