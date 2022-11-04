import { loginContent } from "./pages/login/login";
import { signInContent } from "./pages/sign-in/sign-in";
import "./style.scss";

const PAGES = {
  "/": signInContent,
  "/login": loginContent,
};

window.renderPage = function renderPage(name) {
  const root = document.querySelector("#root");
  root.innerHTML = PAGES[name];
};

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    renderPage(path)
})