import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

const DeleteChr: FunctionComponent = (props) => {
  const [status, setStatus] = useState<number>();
  const deleteChr = async () => {
    const response = await fetch("/api/deleteCharacter", {
      method: "delete",
      body: JSON.stringify({ name: "Anakin", creator: "Guille" }),
      headers: { "Content-Type": "application/json" },
    });
    setStatus(response.status);
  };
  return (
    <div>
      <button onClick={deleteChr}>Delete</button>
      <p>Status: {status}</p>
    </div>
  );
};
export default DeleteChr;
