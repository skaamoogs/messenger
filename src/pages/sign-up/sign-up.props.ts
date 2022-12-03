import { ROUTES } from "../../const";

const signUpProps = {
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
      validation: true
    },
    {
      inputProps: {
        name: "login",
        type: "text",
      },
      label: "Логин",
      validation: true
    },
    {
      inputProps: {
        name: "first_name",
        type: "text",
      },
      label: "Имя",
      validation: true
    },
    {
      inputProps: {
        name: "second_name",
        type: "text",
      },
      label: "Фамилия",
      validation: true
    },
    {
      inputProps: {
        name: "phone",
        type: "tel",
      },
      label: "Телефон",
      validation: true
    },
    {
      inputProps: {
        name: "password",
        type: "password",
      },
      label: "Пароль",
      validation: true
    },
    {
      inputProps: {
        name: "confirmPassword",
        type: "password",
      },
      label: "Пароль (еще раз)",
      validation: false
    },
  ],
  buttonProps: {
    className: "primary-button",
    label: "Зарегистрироваться",
    type: "submit",
  },
};

export default signUpProps;
