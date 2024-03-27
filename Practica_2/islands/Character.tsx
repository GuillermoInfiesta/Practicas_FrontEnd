import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import DeleteButton from "./DeleteButton.tsx";

export type CharacterParams = {
  name: string;
  image: string;
  sound: string;
};
const Character: FunctionComponent<CharacterParams> = (props) => {
  const { name, image, sound } = props;
  console.log(image);
  return (
    <div class="character-display">
      <image class="ch-image" src={image} alt={`${name}´s image`} />
      <h2>{name}</h2>
      <audio controls>
        <source src={sound} />
      </audio>
      <DeleteButton name={name} />
    </div>
    //ON BLUR CLEANUP
  );
};
export default Character;
