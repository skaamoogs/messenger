import ROUTES from "../../const";

const loginProps = {
  title: "Вход",
  linkProps: {
    text: "Ещё не зарегистрированы?",
    route: ROUTES.signIn,
    className: "registration-form-link",
  },
  labelClassName: "registration-input-label",
  inputClassName: "registration-input",
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
