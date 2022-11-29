const passwordFieldsProps = {
  className: "input-profile",
  fields: [
    { type: "password", name: "old_password", label: "Старый пароль" },

    { type: "password", name: "new_password", label: "Новый пароль" },

    {
      type: "password",
      name: "confirm_password",
      label: "Подтвердить новый пароль",
    },
  ],
};

export default passwordFieldsProps;
