import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import Popup from "../../components/popup/popup";
import { resourceURL, ROUTES } from "../../const";
import withStore from "../../hocs/with-store";
import Block from "../../modules/block";
import { State } from "../../utils/interfaces";
import router from "../../utils/route/router";
import ConfigFields from "./components/config-fields/config-fields";
import ProfileForm from "./components/profile-form/profile-form";
import profileProps from "./profile.props";
import profileTemplate from "./profile.tmpl";

class ProfileBase extends Block<typeof profileProps> {
  init() {
    const pathname = router.getCurrentPathname();

    const { avatarProps, backButtonProps, popupProps } = this.props;

    this.children.backButton = new Button({
      ...backButtonProps,
      events: {
        click: () => this.back(),
      },
    });

    this.children.avatar = new Avatar({
      ...avatarProps,
      events: {
        click: () => this.callPopup(),
      },
    });

    this.children.profileForm = new ProfileForm();

    if (pathname === ROUTES.profile) {
      this.children.config = new ConfigFields();
    }
    this.children.popup = new Popup({ ...popupProps });
  }

  callPopup() {
    const popup = this.children.popup as Block;
    popup.show("flex");
  }

  back() {
    router.go(ROUTES.chat);
  }

  render() {
    const template = Handlebars.compile(profileTemplate);
    throw new Error("Error on profile page");
    return this.compile(template, { ...this.props });
  }
}

function mapProfileToProps(state: State) {
  const { avatarProps } = profileProps;
  const { user } = state;
  let avatar = avatarProps.src;
  let imageClassName = "avatar-base";
  if (user?.avatar) {
    avatar = `${resourceURL}${user.avatar}`;
    imageClassName += "-image";
  }
  return {
    avatarProps: {
      ...avatarProps,
      imageClassName,
      src: avatar,
    },
  };
}

const withProfile = withStore(mapProfileToProps);
const Profile = withProfile(ProfileBase as typeof Block);

export default Profile;
