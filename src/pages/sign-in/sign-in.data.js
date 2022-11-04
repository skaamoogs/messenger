export const signInData = {
  title: "Регистрация",
  buttonName: "Зарегистрироваться",
  footerText: "Уже есть аккаунт?",
  route: "/login",
  inputs: [
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
};
