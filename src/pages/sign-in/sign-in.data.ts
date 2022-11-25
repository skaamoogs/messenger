import ROUTES from "../../const";

const signInProps = {
  title: "Регистрация",
  linkProps: {
    text: "Уже есть аккаунт?",
    route: ROUTES.login,
    className: "registration-form-link",
  },
  labelClassName: "registration-input-label",
  inputClassName: "registration-input",
  inputsList: [
    {
      name: "email",
      type: "email",
      label: "Почта",
    },
    {
      name: "login",
      type: "text",
      label: "Логин",
    },
    {
      name: "first_name",
      type: "text",
      label: "Имя",
    },
    {
      name: "last_name",
      type: "text",
      label: "Фамилия",
    },
    {
      name: "phone",
      type: "tel",
      label: "Телефон",
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Пароль (еще раз)",
    },
  ],
  buttonProps: {
    className: "primary-button",
    label: "Зарегистрироваться",
  },
};

export default signInProps;
