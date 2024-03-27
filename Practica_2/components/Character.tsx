import { FunctionComponent } from "preact";
import DeleteButton from "../islands/DeleteButton.tsx";
export type CharacterParams = {
  name: string;
  image: string;
  sound: string;
};
const Character: FunctionComponent<CharacterParams> = (props) => {
  const { name, image, sound } = props;
  return (
    <div class="character-display">
      <image class="ch-image" src={image} alt={`${name}´s image`} />
      <h2>{name}</h2>
      <audio controls>
        <source src={sound} />
      </audio>
      <DeleteButton name={name} />
    </div>
  );
};
export default Character;
