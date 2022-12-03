import { ROUTES } from "./const";
import Block from "./modules/block";
import ChatPage from "./pages/chat/chat-page";
import ErrorPage from "./pages/error-page/error-page";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import SignUp from "./pages/sign-up/sign-up";
import "./style.scss";

const PAGES = {
  [ROUTES.signUp]: new SignUp(),
  [ROUTES.login]: new Login(),
  [ROUTES.profile]: new Profile(),
  [ROUTES.password]: new Profile(),
  [ROUTES.data]: new Profile(),
  [ROUTES.chat]: new ChatPage(),
  [ROUTES.page404]: new ErrorPage(),
  [ROUTES.page500]: new ErrorPage(),
};

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  const content = block.getContent();
  if (root && content) {
    root.appendChild(content);
  }

  block.dispatchComponentDidMount();

  return root;
}

let path = window.location.pathname;
if (!path.endsWith("/")) {
  path += "/";
  window.location.pathname = path;
}

render(".root", PAGES[path]);
