import { FunctionComponent } from "preact";
import { Lover } from "../Types.ts";
import { AddCookie } from "../islands/AddCookie.tsx";

type LoverCardPorps = {
  name: string;
  age: number;
  photo: string;
};
export const LoverCard: FunctionComponent<LoverCardPorps> = (props) => {
  return (
    <div class="lover-card">
      <img src={props.photo} alt={`${props.name}´s image`} />
      <div class="details">{props.name + " " + props.age}</div>
    </div>
  );
};
