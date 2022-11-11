import { ROUTES } from "../../const";
import leftArrowImg from "../../images/arrow-left.svg";
import emptyAvatarImg from "../../images/empty-avatar.svg";

export const profileData = {
  backButtonRoute: ROUTES.chat,
  leftArrowImage: leftArrowImg,
  emptyAvatarImage: emptyAvatarImg,
  changeAvatarText: "Поменять<br>аватар",
  userFields: ["Почта", "Логин", "Имя", "Фамилия", "Имя в чате", "Телефон"],
  configFields: [
    { text: "Изменить данные", path: ROUTES.data },
    { text: "Изменить пароль", path: ROUTES.password },
    { text: "Выйти", path: ROUTES.login },
  ],
  passwordFields: [
    { text: "Старый пароль", type: "password", name: "old_password" },
    { text: "Новый пароль", type: "password", name: "new_password" },
    {
      text: "Повторите новый пароль",
      type: "password",
      name: "confirm_password",
    },
  ],
  saveButtonName: "Сохранить",
};
