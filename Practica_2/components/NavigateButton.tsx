import { FunctionComponent, JSX } from "preact";

type NavButtonParams = {
  route: string;
  text: string;
};

const NavButton: FunctionComponent<NavButtonParams> = (props) => {
  const { route, text } = props;
  return (
    <a href={route} class="navigation-button">
      <text>{text}</text>
    </a>
  );
};

export default NavButton;
