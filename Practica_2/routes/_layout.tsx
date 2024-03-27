import { PageProps } from "$fresh/server.ts";
import NavButton from "../components/NavigateButton.tsx";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div class="main">
      <div class="navigation-bar">
        <NavButton route="/all" text="Todos los personajes" />
        <NavButton route="/search" text="Buscar personajes" />
        <NavButton route="/add" text="Añadir personaje" />
      </div>
      <Component />
    </div>
  );
};
export default Layout;
