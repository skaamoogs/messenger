import { ROUTES } from "./const";
import AuthController from "./controllers/auth.controller";
import ChatPage from "./pages/chat/chat-page";
import chatPageProps from "./pages/chat/chat-page.props";
import ErrorPage from "./pages/error-page/error-page";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import profileProps from "./pages/profile/profile.props";
import SignUp from "./pages/sign-up/sign-up";
import "./style.scss";
import router from "./utils/route/router";

window.addEventListener("DOMContentLoaded", async () => {
  router
    .use(ROUTES.login, Login)
    .use(ROUTES.signUp, SignUp)
    .use(ROUTES.profile, Profile, profileProps)
    .use(ROUTES.password, Profile, profileProps)
    .use(ROUTES.data, Profile, profileProps)
    .use(ROUTES.chat, ChatPage, { ...chatPageProps, isLoaded: false })
    .use(ROUTES.page404, ErrorPage)
    .use(ROUTES.page500, ErrorPage);

  let isAuthorized = false;

  try {
    await AuthController.getUser();
    router.start();
    isAuthorized = true;
  } catch (error) {
    router.start();
    isAuthorized = false;
    router.go(ROUTES.login);
  }

  switch (window.location.pathname) {
    case ROUTES.login:
    case ROUTES.signUp:
      if (isAuthorized) {
        router.go(ROUTES.profile);
      }
      break;
    default:
      break;
  }
});
