import ROUTES from "../../const";
import leftArrowImg from "../../images/arrow-left.svg";
import emptyAvatarImg from "../../images/empty-avatar.svg";

const profileProps = {
  leftArrowImage: leftArrowImg,
  emptyAvatarImage: emptyAvatarImg,
  changeAvatarText: "Поменять<br>аватар",
  classNames: { user: "user-data-table", config: "configuration-table" },
  userFields: [
    {
      userText: "Почта",
      userInputProps: { name: "email", type: "email" },
      type: "user",
    },
    {
      userText: "Логин",
      userInputProps: { name: "login", type: "text" },
      type: "user",
    },
    {
      userText: "Имя",
      userInputProps: { name: "first_name", type: "text" },
      type: "user",
    },
    {
      userText: "Фамилия",
      userInputProps: { name: "last_name", type: "text" },
      type: "user",
    },
    {
      userText: "Имя в чате",
      userInputProps: { name: "nickname", type: "text" },
      type: "user",
    },
    {
      userText: "Телефон",
      userInputProps: { name: "phone", type: "tel" },
      type: "user",
    },
  ],
  configFields: [
    {
      linkProps: { text: "Изменить данные", route: ROUTES.data },
      type: "config",
    },
    {
      linkProps: { text: "Изменить пароль", route: ROUTES.password },
      type: "config",
    },
    { linkProps: { text: "Выйти", route: ROUTES.login }, type: "config" },
  ],
  passwordFields: [
    {
      passwordText: "Старый пароль",
      passwordInputProps: { type: "password", name: "old_password" },
      type: "password",
    },
    {
      passwordText: "Новый пароль",
      passwordInputProps: { type: "password", name: "new_password" },
      type: "password",
    },
    {
      passwordText: "Повторите новый пароль",
      passwordInputProps: { type: "password", name: "confirm_password" },
      type: "password",
    },
  ],
  saveButtonProps: {
    className: "primary-button profile-save-button",
    label: "Сохранить",
  },
};

export default profileProps;
