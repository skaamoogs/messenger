const passwordFieldsProps = {
  inputFieldClassName: "input-field-profile",
  fields: [
    {
      inputProps: { type: "password", name: "oldPassword" },
      label: "Старый пароль",
      validation: false,
    },

    {
      inputProps: { type: "password", name: "newPassword" },
      label: "Новый пароль",
      validation: true,
    },

    {
      inputProps: {
        type: "password",
        name: "confirmPassword",
      },
      label: "Подтвердить новый пароль",
      validation: false,
    },
  ],
};

export default passwordFieldsProps;
