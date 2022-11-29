const userFieldsProps = {
  className: "input-profile",
  fields: [
    { name: "email", type: "email", label: "Почта", placeholder: "user data" },
    { name: "login", type: "text", label: "Логин", placeholder: "user data" },
    { name: "first_name", type: "text", label: "Имя", placeholder: "user data" },
    { name: "last_name", type: "text", label: "Фамилия", placeholder: "user data" },
    { name: "nickname", type: "text", label: "Имя в чате", placeholder: "user data" },
    { name: "phone", type: "tel", label: "Телефон", placeholder: "user data" },
  ],
};

export default userFieldsProps;
