const passwordFieldsProps = {
  inputFieldClassName: "input-field-profile",
  fields: [
    {
      inputProps: { type: "password", name: "old_password" },
      label: "Старый пароль",
    },

    {
      inputProps: { type: "password", name: "new_password" },
      label: "Новый пароль",
    },

    {
      inputProps: {
        type: "password",
        name: "confirm_password",
      },
      label: "Подтвердить новый пароль",
    },
  ],
};

export default passwordFieldsProps;
