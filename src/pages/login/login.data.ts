import ROUTES from "../../const";

const loginProps = {
  mainProps: {
    title: "Вход",
    footerText: "Ещё не зарегистрированы?",
    route: ROUTES.signIn,
  },
  labelClassName: "registration-input-label",
  inputClassName: "input registration-form-input",
  inputsList: [
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
  buttonProps: {
    className: "primary-button",
    label: "Войти",
  },
};

export default loginProps;
