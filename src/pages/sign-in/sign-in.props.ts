import ROUTES from "../../const";

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
        pattern:
          /^[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9][.#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]*@[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+\.[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+$/,
      },
      label: "Почта",
    },
    {
      inputProps: {
        name: "login",
        type: "text",
        pattern: /^(?=.*[A-Za-z_-])([\w-]){3,20}$/,
      },
      label: "Логин",
      errorMessage:
        `Логин должен содержать 3 до 20 символов,
         латиница, может содержать цифры, но не состоять из них, 
         без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`,
    },
    {
      inputProps: {
        name: "first_name",
        type: "text",
        pattern: /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/,
      },
      label: "Имя",
    },
    {
      inputProps: {
        name: "last_name",
        type: "text",
        pattern: /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/,
      },
      label: "Фамилия",
    },
    {
      inputProps: {
        name: "phone",
        type: "tel",
        pattern: /^\+?\d$/,
      },
      label: "Телефон",
    },
    {
      inputProps: {
        name: "password",
        type: "password",
        pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
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
