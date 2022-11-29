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
      },
      label: "Почта",
      pattern:
        /^[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9][.#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]*@[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+\.[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+$/,
      errorMessage:
        "Некорректный email. Допускаются латиница, спецсимволы и цифры.",
    },
    {
      inputProps: {
        name: "login",
        type: "text",
      },
      label: "Логин",
      pattern: /^(?=.*[A-Za-z_-])([\w-]){3,20}$/,
      errorMessage: `Логин должен содержать 3 до 20 символов,
         латиница, может содержать цифры, но не состоять из них, 
         без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`,
    },
    {
      inputProps: {
        name: "first_name",
        type: "text",
      },
      label: "Имя",
      pattern: /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/,
      errorMessage: `Некорректное имя. Первая буква должна быть заглавной, 
        без пробелов, цифр и спецсимволов (допустим только дефис).`,
    },
    {
      inputProps: {
        name: "last_name",
        type: "text",
      },
      label: "Фамилия",
      pattern: /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/,
      errorMessage: `Некорректная фамилия. Первая буква должна быть заглавной, 
        без пробелов, цифр и спецсимволов (допустим только дефис).`,
    },
    {
      inputProps: {
        name: "phone",
        type: "tel",
      },
      label: "Телефон",
      pattern: /^\+?\d$/,
      errorMessage: `Некорректный формат номера. Телефон должен содержать от 10 до 15 символов, 
      состоять из цифр, может начинается с плюса.`,
    },
    {
      inputProps: {
        name: "password",
        type: "password",
      },
      label: "Пароль",
      pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
      errorMessage: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
      обязательно хотя бы одна заглавная буква и цифра.`,
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
