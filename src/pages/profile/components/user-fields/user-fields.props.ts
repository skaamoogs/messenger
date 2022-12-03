const userFieldsProps = {
  inputFieldClassName: "input-field-profile",
  validation: false,
  fields: [
    {
      inputProps: { name: "email", type: "email", value: "alex@mail.com" },
      label: "Почта",
    },
    {
      inputProps: { name: "login", type: "text", value: "alex" },
      label: "Логин",
    },
    {
      inputProps: {
        name: "first_name",
        type: "text",

        value: "Alex",
      },
      label: "Имя",
    },
    {
      inputProps: {
        name: "second_name",
        type: "text",
        value: "Shabanov",
      },
      label: "Фамилия",
    },

    {
      inputProps: {
        name: "nickname",
        type: "text",
        value: "skaamoogs",
      },
      label: "Имя в чате",
    },
    {
      inputProps: { name: "phone", type: "tel", value: "+79991234567" },
      label: "Телефон",
    },
  ],
};

export default userFieldsProps;
