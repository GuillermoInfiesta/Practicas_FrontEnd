// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_DeleteUser from "./routes/api/DeleteUser.ts";
import * as $api_FetchUser from "./routes/api/FetchUser.ts";
import * as $api_PostNewUser from "./routes/api/PostNewUser.ts";
import * as $api_PublishComment from "./routes/api/PublishComment.ts";
import * as $api_UpdateUser from "./routes/api/UpdateUser.ts";
import * as $api_ValidateLogin from "./routes/api/ValidateLogin.ts";
import * as $index from "./routes/index.tsx";
import * as $ActiveUser from "./islands/ActiveUser.tsx";
import * as $ActiveUserProfile from "./islands/ActiveUserProfile.tsx";
import * as $AddCookie from "./islands/AddCookie.tsx";
import * as $CommentWritter from "./islands/CommentWritter.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $HobbiesBox from "./islands/HobbiesBox.tsx";
import * as $HomePage from "./islands/HomePage.tsx";
import * as $LogOptions from "./islands/LogOptions.tsx";
import * as $LoginPopup from "./islands/LoginPopup.tsx";
import * as $LoverCard from "./islands/LoverCard.tsx";
import * as $ProfileComment from "./islands/ProfileComment.tsx";
import * as $SearchFilters from "./islands/SearchFilters.tsx";
import * as $SignupPopup from "./islands/SignupPopup.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/DeleteUser.ts": $api_DeleteUser,
    "./routes/api/FetchUser.ts": $api_FetchUser,
    "./routes/api/PostNewUser.ts": $api_PostNewUser,
    "./routes/api/PublishComment.ts": $api_PublishComment,
    "./routes/api/UpdateUser.ts": $api_UpdateUser,
    "./routes/api/ValidateLogin.ts": $api_ValidateLogin,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/ActiveUser.tsx": $ActiveUser,
    "./islands/ActiveUserProfile.tsx": $ActiveUserProfile,
    "./islands/AddCookie.tsx": $AddCookie,
    "./islands/CommentWritter.tsx": $CommentWritter,
    "./islands/Counter.tsx": $Counter,
    "./islands/Header.tsx": $Header,
    "./islands/HobbiesBox.tsx": $HobbiesBox,
    "./islands/HomePage.tsx": $HomePage,
    "./islands/LogOptions.tsx": $LogOptions,
    "./islands/LoginPopup.tsx": $LoginPopup,
    "./islands/LoverCard.tsx": $LoverCard,
    "./islands/ProfileComment.tsx": $ProfileComment,
    "./islands/SearchFilters.tsx": $SearchFilters,
    "./islands/SignupPopup.tsx": $SignupPopup,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
