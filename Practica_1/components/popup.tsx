import { JSX } from "preact";

export function Popup(props: JSX.HTMLAttributes) {
  return (
    <div class="popup">
      <div class="flex items-center">
        <img
          class="profile-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmiv0YeE1zEsnsw9LxiqhksEiHew_7IJEnFrm-k1dtsZ967OI5XEelhfPynTQXOaZ-zM&usqp=CAU"
        />
        <h2 class="popup-header">Are you the one? {"(DONT REPLY)"}</h2>
      </div>
      <div class="popup-message">
        <text>
          If you think you are the one chosen by god please dont doubt and
          contact us as soon as possible at +33 600 6017 293
        </text>
      </div>
    </div>
  );
}
