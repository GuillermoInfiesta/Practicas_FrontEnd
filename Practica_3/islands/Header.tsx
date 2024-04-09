import { FunctionComponent } from "preact";
import { ActiveUser } from "../islands/ActiveUser.tsx";
import { LogOptions } from "../islands/LogOptions.tsx";
import { Signal, useSignal } from "@preact/signals";
//export const logged = useSignal<boolean>(false);

export const Header: FunctionComponent<{ logged: Signal<boolean> }> = (
  props,
) => {
  console.log(props.logged.value);
  props.logged.value = true;
  return (
    <div class="header">
      <div class="flex">
        <img
          class="logo"
          src="https://static.vecteezy.com/system/resources/previews/018/910/833/original/tinder-app-logo-tinder-app-icon-free-free-vector.jpg"
        />
        <h2>Ligoteo World</h2>
      </div>
      <LogOptions />
      <ActiveUser />
    </div>
  );
};
