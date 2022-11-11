import { ROUTES } from "../../const";
import avatarImg from "../../images/avatar.jpg";
import clipIconImg from "../../images/clip-icon.svg";
import rightArrowImg from "../../images/arrow-right.svg"

export const chatData = {
  profileRefText: "Профиль",
  profileRoute: ROUTES.profile,
  clipIcon: clipIconImg,
  rightArrow: rightArrowImg,
  message: {
    avatar: avatarImg,
    author: "Александр",
    time: "16:22",
    text: "Всем привет! Кто уже прошел первый спринт?",
    unreadCount: "3",
  },
  user: {
    name: "Александр",
    avatar: avatarImg,
    message: {
      inputName: "user-message",
      placeholder: "Сообщение",
    },
  },
};
