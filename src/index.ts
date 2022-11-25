import ROUTES from "./const";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import SignIn from "./pages/sign-in/sign-in";
import "./style.scss";

const PAGES = {
  [ROUTES.signIn]: new SignIn(),
  [ROUTES.login]: new Login(),
  [ROUTES.profile]: new Profile(),
  [ROUTES.password]: new Profile(),
  [ROUTES.data]: new Profile(),
  /*
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

const root = document.querySelector(".root");

document.addEventListener("DOMContentLoaded", () => {
  let path = window.location.pathname;
  if (!path.endsWith("/")) {
    path += "/";
    window.location.pathname = path;
  }
  const content = PAGES[path].getContent();
  if (content) {
    root?.append(content);
  }
});
