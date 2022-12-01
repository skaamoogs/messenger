import { ROUTES } from "../../const";
import avatarImg from "../../images/avatar.jpg";
import clipIconImg from "../../images/clip-icon.svg";
import rightArrowImg from "../../images/arrow-right.svg";

const chatPageProps = {
  profileLinkProps: {
    text: "Профиль",
    route: ROUTES.profile,
    className: "anchor profile-link",
  },
  searchInputProps: {
    className: "search-input-container",
    type: "search",
    inputClassName: "chat-search-input",
    placeholder: "Поиск",
  },
  clipIcon: clipIconImg,
  rightArrow: rightArrowImg,
  chatProps: {
    avatarProps: {
      imageClassName: "avatar author-avatar",
      src: avatarImg,
      alt: "avatar",
    },
    author: "Александр",
    time: "16:22",
    text: "Всем привет! Кто уже прошел первый спринт?",
    unreadCount: "3",
  },
  userAvatarProps: {
    className: "user-avatar-container",
    imageClassName: "avatar user-avatar",
    src: avatarImg,
    alt: "avatar",
  },
  user: {
    name: "Александр",
    message: {
      inputName: "user-message",
      placeholder: "Сообщение",
    },
  },
  messageInputProps: {
    className: "message-input-container",
    type: "text",
    inputClassName: "chat-area-message-input",
    placeholder: "Сообщение",
    name: "message",
  },
  settingsButtonProps: {
    type: "button",
    label: "&#8226;&#8226;&#8226;",
    className: "round-button user-settings-button",
  },
  sendMessageButtonProps: {
    type: "submit",
    image: rightArrowImg,
    className: "round-button",
    alt: "right arrow",
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
