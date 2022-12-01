import { ROUTES } from "../../const";

const signInProps = {
  title: "Регистрация",
  action: ROUTES.chat,
  linkProps: {
    text: "Уже есть аккаунт?",
    route: ROUTES.login,
    className: "registration-form-link",
  },
  inputFieldClassName: "input-field-registration",
  labelClassName: "registration-input-label",
  inputFieldList: [
    {
      inputProps: {
        name: "email",
        type: "email",
      },
      label: "Почта",
    },
    {
      inputProps: {
        name: "login",
        type: "text",
      },
      label: "Логин",
    },
    {
      inputProps: {
        name: "first_name",
        type: "text",
      },
      label: "Имя",
    },
    {
      inputProps: {
        name: "second_name",
        type: "text",
      },
      label: "Фамилия",
    },
    {
      inputProps: {
        name: "phone",
        type: "tel",
      },
      label: "Телефон",
    },
    {
      inputProps: {
        name: "password",
        type: "password",
      },
      label: "Пароль",
    },
    {
      inputProps: {
        name: "confirmPassword",
        type: "password",
      },
      label: "Пароль (еще раз)",
    },
  ],
  buttonProps: {
    className: "primary-button",
    label: "Зарегистрироваться",
    type: "submit",
  },
};

export default signInProps;
