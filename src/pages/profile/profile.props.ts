import leftArrowImg from "../../images/arrow-left.svg";
import emptyAvatarImg from "../../images/empty-avatar.svg";

const profileProps = {
  changeAvatarText: "Поменять<br>аватар",
  backButtonProps: {
    className: "round-button",
    type: "submit",
    image: leftArrowImg,
    alt: "back button",
  },
  avatarProps: {
    className: "profile-avatar-container",
    src: emptyAvatarImg,
    alt: "avatar",
    changeAvatarText: "Поменять<br>аватар",
    imageClassName: "avatar-base",
    maskClassName: "avatar-mask",
  },
  popupProps: {
    title: "Загрузите файл",
    textProps: {
      text: "",
      className: "file-text",
    },
    inputFieldProps: {
      label: "Выбрать файл на компьютере",
      labelClassName: "file-input-label",
      inputFieldClassName: "input-popup-profile",
      inputProps: {
        type: "file",
        className: "file-input",
        name: "avatar",
        accept: ".jpg, .jpeg, .png",
      },
      validation: false,
    },
    buttonProps: {
      type: "submit",
      className: "primary-button",
      label: "Поменять",
    },
  },
};

export default profileProps;
