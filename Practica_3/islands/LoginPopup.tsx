import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { CloseLogin } from "../methods/PopupInteractions.ts";
export const LoginPopup: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const login = async () => {
    if (name === "" || name.indexOf(" ") !== -1) {
      setError("Non valid name");
      return;
    }
    if (password === "" || password.indexOf(" ") !== -1) {
      setError("Non valid password");
      return;
    }

    const login_success = await fetch("../api/ValidateLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, password: password }),
    });

    if (login_success.status !== 200) {
      setError("No matching accounts");
      return;
    }

    //CAMBIAR SEÑAL DE LOGIN A TRUE Y ACTUALIZAR LA PÁGINA
  };
  return (
    <div id="popup#login" class="popup flex flex-col">
      <div class="login-header">
        <button
          type="exit"
          onClick={() => {
            setName("");
            setPassword("");
            setError("");
            CloseLogin();
          }}
        >
          x
        </button>
        <h3>Login</h3>
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
        <button onClick={login}>Continue</button>
        {error !== "" && <span class="error">{error}</span>}
      </div>
    </div>
  );
};
