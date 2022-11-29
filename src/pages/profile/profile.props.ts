import ROUTES from "../../const";
import leftArrowImg from "../../images/arrow-left.svg";
import emptyAvatarImg from "../../images/empty-avatar.svg";

const profileProps = {
  changeAvatarText: "Поменять<br>аватар",
  route: ROUTES.profile,
  backButtonProps: {
    className: "round-button",
    type: "submit",
    image: leftArrowImg,
    alt: "back button",
  },
  saveButtonProps: {
    className: "primary-button profile-save-button",
    label: "Сохранить",
    type: "submit",
  },
  avatarProps: {
    className: "avatar-container",
    src: emptyAvatarImg,
    alt: "avatar",
    changeAvatarText: "Поменять<br>аватар",
    imageClassName: "avatar-image",
    maskClassName: "avatar-mask",
  },
};

export default profileProps;
