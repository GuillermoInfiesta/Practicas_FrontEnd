import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import HiButton from "./HiButton.tsx";
import Shower from "../components/Shower.tsx";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

export const HiForm: FunctionComponent = () => {
  const sayHi = useSignal<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  return (
    <div class="formBody">
      <form
        class="formBox"
        method="get"
        action="/hihihi"
        onSubmit={(e) => {
          e.preventDefault();
          sayHi.value = `${nombre} ${apellido}`;
        }}
      >
        <h3>Say hi hi hi</h3>
        <input
          type="text"
          name="nombre"
          placeholder={"Name"}
          onInput={(e) => {
            setNombre(e.currentTarget.value);
          }}
        />
        <br />
        <input
          type="text"
          name="apellido"
          placeholder={"Last name"}
          onInput={(e) => {
            setApellido(e.currentTarget.value);
          }}
        />
        <br />
        <HiButton type="submit">
          Hi!
        </HiButton>
      </form>
      <Shower
        text={sayHi}
      />
    </div>
  );
};
