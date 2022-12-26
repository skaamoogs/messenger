import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import Popup from "../../components/popup/popup";
import { ROUTES } from "../../const";
import withStore from "../../hocs/with-store";
import Block from "../../modules/block";
import router from "../../utils/route/router";
import { Indexed } from "../../utils/types";
import ConfigFields from "./components/config-fields/config-fields";
import ProfileForm from "./components/profile-form/profile-form";
import profileProps from "./profile.props";
import profileTemplate from "./profile.tmpl";

class ProfileBase extends Block<typeof profileProps> {
  constructor() {
    super(profileProps);
  }

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
    const popup = this.children.popup as Popup;
    popup.show("flex");
  }

  back() {
    router.go(ROUTES.chat);
  }

  render() {
    console.log("profile page rendered");
    const template = Handlebars.compile(profileTemplate);
    return this.compile(template, { ...this.props });
  }
}

function mapAvatarToProps(state: Indexed) {
  if (!state.user) {
    return {};
  }
  const user = state.user as Indexed;
  return {
    avatarProps: {
      src: user.avatar,
    },
  };
}

const withProfile = withStore(mapAvatarToProps);
const Profile = withProfile(ProfileBase as typeof Block);

export default Profile;
