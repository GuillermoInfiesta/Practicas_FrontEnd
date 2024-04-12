import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { Lover } from "../Types.ts";
import { CloseAllPopups } from "../methods/PopupInteractions.ts";
import { Comment } from "./Comment.tsx";
import { CommentsBox } from "./CommentsBox.tsx";
import { HobbiesBox } from "../islands/HobbiesBox.tsx";

export const LoverProfile: FunctionComponent<{ lover: Signal<Lover> }> = (
  props,
) => {
  //Abajo una isla para poder añadir comments
  //Props tambien deberia tener el logged_in y el nombre para los comments
  return (
    <div id="popup#lover" class="popup popup-lover">
      <div class="lover-data">
        <img src={props.lover.value.photo} />
        <h2>{props.lover.value.name}</h2>
        <div>
          <span>{props.lover.value.age + " "}</span>
          <span>{props.lover.value.sex}</span>
        </div>
        <button onClick={() => CloseAllPopups()}>Close Profile</button>
      </div>
      <div class="lover-details">
        <h4>About me</h4>
        <div class="about-lover">
          <div class="half">
            <h5>Description</h5>
            {props.lover.value.description}
          </div>
          <div class="half">
            <h5>Hobbies</h5>
            <HobbiesBox hobbies={props.lover.value.hobbies} />
          </div>
        </div>
        <h4>Comments</h4>
        <CommentsBox comments={props.lover.value.comments} />
      </div>
    </div>
  );
};
