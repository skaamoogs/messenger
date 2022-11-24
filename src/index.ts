import ROUTES from "./const";
/* import chatContent from "./pages/chat/chat";
import page404Content from "./pages/error-page/page404/page404";
import page500Content from "./pages/error-page/page500/page500"; */
import Login from "./pages/login/login";
/* import profileContent from "./pages/profile/profile";
import signInContent from "./pages/sign-in/sign-in"; */
import "./style.scss";

const PAGES = {
/*   [ROUTES.signIn]: signInContent, */
  [ROUTES.login]: new Login(),
/*   [ROUTES.profile]: profileContent,
  [ROUTES.password]: profileContent,
  [ROUTES.data]: profileContent,
  [ROUTES.chat]: chatContent,
  [ROUTES.page404]: page404Content,
  [ROUTES.page500]: page500Content, */
};

/* const renderPage = function renderPage(name: string) {
  const root = document.querySelector("#root");
  if (root != null) {
    root.innerHTML = PAGES[name];
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  renderPage(path);
}); */

/* import Button from "./components/button/button";

const button = new Button({
  className: "primary-button",
  label: "Click me",
  events: {
    click: () => console.log("clicked"),
  },
}); */

const root = document.querySelector(".root");

const content = PAGES[ROUTES.login].getContent();
if (content) {
  root?.append(content);
}
