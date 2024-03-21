import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { CharacterParams } from "../components/Character.tsx";
import Character from "../components/Character.tsx";
import Characters from "../components/Characters.tsx";

const CharactersSearch: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [characters, setCharacters] = useState<CharacterParams[]>([]);
  const getCharacters = async () => {
    console.log("me llaman");
    const res = await fetch(`https://supermondongo.deno.dev/${name}`, {
      method: "GET",
      mode: "cors",
    });
    console.log(res.status);
    console.log(res);
    if (res.status !== 200) {
      throw new Error("a");
    }
    const data = await res.json();
    setCharacters(data);
  };
  /*return (
    <div>
      <div onBlur={getCharacters} onSubmit={getCharacters}>
        <input type="text" id="name" name="name" />
        <button onClick={getCharacters}>Submit</button>
      </div>
      <Characters characters={characters} />
    </div>
  );*/
  return (
    <div>
      <button onClick={getCharacters}>Fetch</button>
      <Characters characters={characters} />
    </div>
  );
};

export default CharactersSearch;
