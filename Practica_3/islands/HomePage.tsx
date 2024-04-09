import { FunctionComponent } from "preact";
import { LoversFlex } from "../components/LoversFlex.tsx";
import { SearchFilters } from "./SearchFilters.tsx";
import { Signal, useSignal } from "@preact/signals";
import { Lover } from "../Types.ts";
import { LoginPopup } from "./LoginPopup.tsx";
import { SignUpPopup } from "./SignupPopup.tsx";

type HomePageProps = {
  lovers: Lover[];
};
export const HomePage: FunctionComponent<HomePageProps> = (props) => {
  //console.log(props);

  const name = useSignal<string>("");
  const age = useSignal<number>(0);
  const sex = useSignal<string>("any");
  const hobbies = useSignal<string[]>([]);
  return (
    <div>
      <div id="home" class="home-page">
        <SearchFilters name={name} age={age} sex={sex} hobbies={hobbies} />
        <LoversFlex
          lovers={props.lovers}
          filters={{ name, age, sex, hobbies }}
        />
      </div>
      <LoginPopup />
      <SignUpPopup />
    </div>
  );
};
