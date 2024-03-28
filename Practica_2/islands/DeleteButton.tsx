import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

export type DeleteButtonParams = {
  name: string;
};
const DeleteButton: FunctionComponent<DeleteButtonParams> = (props) => {
  const { name } = props;
  const [creator, setCreator] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const deleteCharacter = async (
    event: JSX.TargetedEvent<HTMLButtonElement, Event>,
  ) => {
    if (creator === "") {
      setMessage("Introduce el creador");
      return;
    }
    const response = await fetch("/api/deleteCharacter", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, creator: creator }),
    });
    if (response.status !== 204) {
      setMessage("Creador incorrecto");
    } else {
      window.location.reload();
    }
  };
  return (
    <div class="delete-div">
      <div class="delete-form">
        <input
          placeholder="Creador"
          name="creator"
          onInput={(e) => {
            setCreator(e.currentTarget.value);
            setMessage("");
          }}
        />
        <input type="hidden" name="name" value={name} />
        <button
          class="delete-button"
          onClick={deleteCharacter}
        >
          <img
            src="https://cdn-icons-png.freepik.com/512/6861/6861362.png"
            alt="borrar"
          />
        </button>
      </div>
      {message !== "" && <span class="error">{message}</span>}
    </div>
  );
};
export default DeleteButton;
