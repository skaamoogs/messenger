import emptyAvatarImg from "../../images/empty-avatar.svg";

const chatPageProps = {
  settingsWindowIsOpen: false,
  plugText: "Выберите чат, чтобы отправить сообщение",
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
      labelClassName: "input-label",
      inputFieldClassName: "input-field",
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
