import { FunctionComponent } from "preact";

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
    </div>
    //ON BLUR CLEANUP
  );
};
export default Character;
