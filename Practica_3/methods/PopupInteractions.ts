export const OpenLogin = () => {
  document.getElementById("popup#signup")?.classList.remove("open-popup");
  const popup = document.getElementById("popup#login");
  popup?.classList.add("open-popup");
  popup?.focus();
  const homepage = document.getElementById("home");
  homepage?.classList.add("blur");
};
export const CloseLogin = () => {
  const popup = document.getElementById("popup#login");
  popup?.classList.remove("open-popup");
  const homepage = document.getElementById("home");
  homepage?.classList.remove("blur");
  homepage?.focus();
};

export const OpenSignUp = () => {
  document.getElementById("popup#login")?.classList.remove("open-popup");

  const popup = document.getElementById("popup#signup");
  popup?.classList.add("open-popup");
  popup?.focus();
  const homepage = document.getElementById("home");
  homepage?.classList.add("blur");
};
export const CloseSignUp = () => {
  const popup = document.getElementById("popup#signup");
  popup?.classList.remove("open-popup");
  const homepage = document.getElementById("home");
  homepage?.classList.remove("blur");
  homepage?.focus();
};
