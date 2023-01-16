import { ROUTES } from "../../const";

const loginProps = {
  title: "Вход",
  action: ROUTES.chat,
  linkProps: {
    text: "Ещё не зарегистрированы?",
    route: ROUTES.signUp,
    className: "registration-form-link",
  },
  labelClassName: "input-label",
  inputFieldClassName: "input-field",
  inputFieldList: [
    {
      inputProps: { name: "login", type: "text" },
      label: "Логин",
      validation: true,
    },
    {
      inputProps: { name: "password", type: "password" },
      label: "Пароль",
      validation: true,
    },
  ],
  buttonProps: {
    className: "primary-button",
    label: "Войти",
    type: "submit",
  },
};

export default loginProps;
