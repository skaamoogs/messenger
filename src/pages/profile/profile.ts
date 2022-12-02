import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import Popup from "../../components/popup/popup";
import { ROUTES } from "../../const";
import Block from "../../modules/block";
import ConfigFields from "./components/config-fields/config-fields";
import ProfileForm from "./components/profile-form/profile-form";
import profileProps from "./profile.props";
import profileTemplate from "./profile.tmpl";

const { pathname } = window.location;

export default class Profile extends Block {
  constructor() {
    super(profileProps);
  }

  init() {
    const { avatarProps, backButtonProps, popupProps } = this.props;

    this.children.backButton = new Button(backButtonProps);

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

  render() {
    const template = Handlebars.compile(profileTemplate);
    return this.compile(template, { ...this.props });
  }
}
