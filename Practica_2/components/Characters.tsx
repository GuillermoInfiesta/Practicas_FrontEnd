import { FunctionComponent } from "preact";
import Character from "./Character.tsx";
import { CharacterParams } from "./Character.tsx";

type CharacersParams = {
  characters: CharacterParams[];
};
const Characters: FunctionComponent<CharacersParams> = (props) => {
  const { characters } = props;
  return (
    <div class="characters-display-grid">
      {characters.map((ch) => {
        return <Character name={ch.name} image={ch.image} sound={ch.sound} />;
      })}
    </div>
  );
};
export default Characters;
