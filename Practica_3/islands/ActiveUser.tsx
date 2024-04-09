import { FunctionComponent } from "preact";
export const ActiveUser: FunctionComponent = () => {
  return (
    <button class="active-user">
      <i class="user-icon"></i>
      <h3>Nombre</h3>
    </button>
  );
};
