import emptyAvatarImg from "../../images/empty-avatar.svg";

const chatPageProps = {
  settingsWindowIsOpen: false,
  userProps: {
    name: "Александр",
    avatar: {
      className: "user-avatar-container",
      imageClassName: "avatar user-avatar",
      src: emptyAvatarImg,
      alt: "avatar",
    },
  },
  settingsButtonProps: {
    type: "button",
    label: "&#8226;&#8226;&#8226;",
    className: "round-button user-settings-button",
  },
  popupProps: {
    title: "Добавить пользователя",
    inputFieldProps: {
      label: "Логин",
      labelClassName: "registration-input-label",
      inputFieldClassName: "input-field-registration",
      inputProps: {
        type: "text",
        name: "login",
      },
      validation: true,
    },
    buttonProps: {
      type: "submit",
      className: "primary-button",
      label: "Добавить",
    },
  },
};

export default chatPageProps;
