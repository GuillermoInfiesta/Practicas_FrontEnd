import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { Lover } from "../Types.ts";
import { CloseAllPopups } from "../methods/PopupInteractions.ts";
import { Comment } from "../components/Comment.tsx";
import { CommentsBox } from "../components/CommentsBox.tsx";
import { HobbiesBox } from "./HobbiesBox.tsx";
import { focused_lover } from "../Signals.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const LoverProfile: FunctionComponent = () => {
  //Abajo una isla para poder añadir comments
  //Props tambien deberia tener el logged_in y el nombre para los comments
  return (
    <>
      {IS_BROWSER &&
        (
          <div id="popup#lover" class="popup popup-lover">
            <div class="lover-data">
              <img src={focused_lover.value.photo} />
              <h2>{focused_lover.value.name}</h2>
              <div>
                <span>{focused_lover.value.age + " "}</span>
                <span>{focused_lover.value.sex}</span>
              </div>
              <button onClick={() => CloseAllPopups()}>Close Profile</button>
            </div>
            <div class="lover-details">
              <h4>About me</h4>
              <div class="about-lover">
                <div class="half">
                  <h5>Description</h5>
                  {focused_lover.value.description}
                </div>
                <div class="half">
                  <h5>Hobbies</h5>
                  <HobbiesBox hobbies={focused_lover.value.hobbies} />
                </div>
              </div>
              <h4>Comments</h4>
              <CommentsBox comments={focused_lover.value.comments} />
            </div>
          </div>
        )}
    </>
  );
};
