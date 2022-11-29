import ROUTES from "./const";
import ChatPage from "./pages/chat/chat-page";
import ErrorPage from "./pages/error-page/error-page";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import SignIn from "./pages/sign-in/sign-in";
import "./style.scss";

const PAGES = {
  [ROUTES.signIn]: new SignIn(),
  [ROUTES.login]: new Login(),
  /*   [ROUTES.profile]: new Profile(),
  [ROUTES.password]: new Profile(),
  [ROUTES.data]: new Profile(),
  [ROUTES.chat]: new ChatPage(),
  [ROUTES.page404]: new ErrorPage(),
  [ROUTES.page500]: new ErrorPage(), */
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
let path = window.location.pathname;

const render = () => {
  if (!path.endsWith("/")) {
    path += "/";
    window.location.pathname = path;
  }
  const content = PAGES[path].getContent();
  if (content) {
    root?.append(content);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  render();
  console.log("root render");
});

/* window.render = render(); */
