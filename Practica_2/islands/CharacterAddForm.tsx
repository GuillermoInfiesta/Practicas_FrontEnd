import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
const CharacterAddForm: FunctionComponent = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [sound, setSound] = useState<string | undefined>(undefined);
  const [creator, setCreator] = useState<string | undefined>(undefined);
  const [added, setAdded] = useState<boolean | undefined>(undefined);

  const addCharacter = async () => {
    const response = await fetch("/api/addCharacter", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        image: image,
        sound: sound,
        creator: creator,
      }),
    });

    if (response.status === 201) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  };
  return (
    <div class="add-character-display">
      <div class="character-form">
        <h2>Datos del personaje</h2>
        <input
          placeholder="Nombre"
          onInput={(e) => {
            setName(e.currentTarget.value);
            setAdded(undefined);
          }}
        />
        <input
          placeholder="URL Imagen"
          onInput={(e) => {
            setImage(e.currentTarget.value);
            setAdded(undefined);
          }}
        />
        <input
          placeholder="URL sonido"
          onInput={(e) => {
            setSound(e.currentTarget.value);
            setAdded(undefined);
          }}
        />
        <input
          placeholder="Creador"
          onInput={(e) => {
            setCreator(e.currentTarget.value);
            setAdded(undefined);
          }}
        />
        <button onClick={addCharacter}>Añadir</button>
      </div>
      {added !== undefined &&
        ((added && <p class="success">Personaje Añadido</p>) ||
          <p class="error">Missing Body Fields</p>)}
    </div>
  );
};
export default CharacterAddForm;
