import { PageProps } from "$fresh/server.ts";
import NavButton from "../components/Navigate.button.tsx";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div>
      <div class="navigation-bar">
        <NavButton route="/search" text="Todos los personajes" />
        <NavButton route="/search/1" text="Un personaje" />
        <NavButton route="" text="Añadir" />
      </div>
      <Component />
    </div>
  );
};
export default Layout;
