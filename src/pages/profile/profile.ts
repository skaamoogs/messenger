import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import ROUTES from "../../const";
import Block from "../../modules/block";
import ConfigFields from "./components/config-fields/config-fields";
import PasswordFields from "./components/password-fields/password-fields";
import UserFields from "./components/user-fields/user-fields";
import profileProps from "./profile.props";
import profileTemplate from "./profile.tmpl";

const { pathname } = window.location;

export default class Profile extends Block {
  constructor() {
    super(profileProps);
  }

  init() {
    const { avatarProps, saveButtonProps, backButtonProps } = this.props;

    this.children.backButton = new Button(backButtonProps);

    this.children.avatar = new Avatar(avatarProps);

    if (pathname !== ROUTES.password) {
      this.children.user = new UserFields();
      if (pathname !== ROUTES.data) {
        this.children.config = new ConfigFields();
      }
      if (pathname === ROUTES.profile) {
        const inputs = this.children.user
          .getContent()
          ?.querySelectorAll("input");
        inputs?.forEach((input) => {
          input.setAttribute("readonly", "readonly");
        });
      }
    }

    if (pathname === ROUTES.password) {
      this.children.password = new PasswordFields();
    }
    if (pathname !== ROUTES.profile) {
      this.children.saveButton = new Button({ ...saveButtonProps });
    }
  }

  render() {
    const template = Handlebars.compile(profileTemplate);
    return this.compile(template, { ...this.props });
  }
}
