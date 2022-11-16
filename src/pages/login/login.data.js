import { ROUTES } from "../../const";

export const loginData = {
  title: "Вход",
  buttonName: "Войти",
  footerText: "Ещё не зарегистрированы?",
  route: ROUTES.signIn,
  inputs: [
    {
      name: "login",
      type: "text",
      label: "Логин",
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
    },
  ],
};
