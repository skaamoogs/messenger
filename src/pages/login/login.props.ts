import { ROUTES } from "../../const";

const loginProps = {
  title: "Вход",
  action: ROUTES.chat,
  linkProps: {
    text: "Ещё не зарегистрированы?",
    route: ROUTES.signIn,
    className: "registration-form-link",
  },
  labelClassName: "registration-input-label",
  inputFieldClassName: "input-field-registration",
  inputFieldList: [
    { inputProps: { name: "login", type: "text" }, label: "Логин" },
    { inputProps: { name: "password", type: "password" }, label: "Пароль" },
  ],
  buttonProps: {
    className: "primary-button",
    label: "Войти",
    type: "submit",
  },
};

export default loginProps;
