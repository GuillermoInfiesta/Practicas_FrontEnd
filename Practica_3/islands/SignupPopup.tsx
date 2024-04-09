import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { CloseSignUp } from "../methods/PopupInteractions.ts";

export const SignUpPopup: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [error, setError] = useState<string>("");

  const signup = async () => {
    if (name === "" || name.indexOf(" ") !== -1) {
      setError("Non valid name");
      return;
    }
    if (password === "" || password.indexOf(" ") !== -1) {
      setError("Non valid password");
      return;
    }
    if (password !== password2) {
      setError("Passwords dont match");
      return;
    }

    const response = await fetch("https://lovers.deno.dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, password: password }),
    });
    console.log(response.status);
    if (response.status !== 200) {
      setError("Name or password are wrong");
    }

    //CAMBIAR SEÑAL DE LOGIN A TRUE Y ACTUALIZAR LA PÁGINA
  };
  return (
    <div id="popup#signup" class="popup flex flex-col">
      <div class="login-header">
        <button type="exit" onClick={() => CloseSignUp()}>x</button>
        <h3>Sign Up</h3>
      </div>
      <div class="login-form">
        <label class="login-form-label">
          <span>Name</span>
          <input
            type="text"
            onInput={(e) => {
              setName(e.currentTarget.value);
              setError("");
            }}
          >
          </input>
        </label>
        <label class="login-form-label">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onInput={(e) => {
              setPassword(e.currentTarget.value);
              setError("");
            }}
          >
          </input>
        </label>
        <label class="login-form-label">
          <span>Repeat Password</span>
          <input
            type="password"
            value={password2}
            onInput={(e) => {
              setPassword2(e.currentTarget.value);
              setError("");
            }}
          >
          </input>
        </label>
        <button onClick={signup}>Continue</button>
        {error !== "" && <span class="error">{error}</span>}
      </div>
    </div>
  );
};
