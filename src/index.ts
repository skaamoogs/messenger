import ROUTES from "./const";
import chatContent from "./pages/chat/chat";
import page404Content from "./pages/error-page/page404/page404";
import page500Content from "./pages/error-page/page500/page500";
import loginContent from "./pages/login/login";
import profileContent from "./pages/profile/profile";
import signInContent from "./pages/sign-in/sign-in";
import "./style.scss";

const PAGES = {
  [ROUTES.signIn]: signInContent,
  [ROUTES.login]: loginContent,
  [ROUTES.profile]: profileContent,
  [ROUTES.password]: profileContent,
  [ROUTES.data]: profileContent,
  [ROUTES.chat]: chatContent,
  [ROUTES.page404]: page404Content,
  [ROUTES.page500]: page500Content,
};

const renderPage = function renderPage(name: string) {
  const root = document.querySelector("#root");
  if (root != null) {
    root.innerHTML = PAGES[name];
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  renderPage(path);
});
