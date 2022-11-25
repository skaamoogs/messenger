import Handlebars from "handlebars";
import Button from "../../components/button/button";
import Block from "../../modules/block";
import ProfileTable from "./components/profile-table/profile-table";
import profileProps from "./profile.props";
import profileTemplate from "./profile.tmpl";

export default class Profile extends Block {
  constructor() {
    super(profileProps);
  }

  init() {
    const {
      classNames,
      userFields,
      passwordFields,
      configFields,
      saveButtonProps,
    } = this.props;

    this.children.user = new ProfileTable({
      profileFields: userFields,
      className: classNames.user,
    });

    this.children.password = new ProfileTable({
      profileFields: passwordFields,
      className: classNames.user,
    });

    this.children.config = new ProfileTable({
      profileFields: configFields,
      className: classNames.config,
    });

    this.children.saveButton = new Button(saveButtonProps);
  }

  render() {
    const template = Handlebars.compile(profileTemplate);
    return this.compile(template, this.props);
  }
}
