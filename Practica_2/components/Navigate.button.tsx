import { FunctionComponent, JSX } from "preact";

type NavButtonParams = {
  route: string;
  text: string;
};

const NavButton: FunctionComponent<NavButtonParams> = (props) => {
  const { route, text } = props;
  return (
    <div class="navigation-button">
      <a href={route}>
        <text>{text}</text>
      </a>
    </div>
  );
};

export default NavButton;
