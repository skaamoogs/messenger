import Button from "./components/button/button";
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
  [ROUTES.profile]: new Profile(),
  [ROUTES.password]: new Profile(),
  [ROUTES.data]: new Profile(),
  [ROUTES.chat]: new ChatPage(),
  [ROUTES.page404]: new ErrorPage(),
  [ROUTES.page500]: new ErrorPage(),
};

function render(query, block) {
  const root = document.querySelector(query);

  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}

let path = window.location.pathname;
if (!path.endsWith("/")) {
  path += "/";
  window.location.pathname = path;
}

render(".root", PAGES[path]);
