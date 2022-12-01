import { POPUP_TYPES } from "../../components/popup/popup";
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
    className: "avatar-container",
    src: emptyAvatarImg,
    alt: "avatar",
    changeAvatarText: "Поменять<br>аватар",
    imageClassName: "avatar-image",
    maskClassName: "avatar-mask",
  },
  popupProps: {
    title: "Загрузите файл",
    type: POPUP_TYPES.input,
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
        name: "choose_file",
        accept: ".jpg, .jpeg, .png",
      },
    },
    buttonProps: {
      type: "button",
      className: "primary-button",
      label: "Поменять",
    },
  },
};

export default profileProps;
