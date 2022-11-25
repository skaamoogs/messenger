import Handlebars from "handlebars";
import Input from "../../../../components/input/input";
import Link from "../../../../components/link/link";
import Block from "../../../../modules/block";
import profileFieldTemplate from "./profile-field.tmpl";

Handlebars.registerHelper("ifEqual", (arg1: string, arg2: string, block) => {
  if (arg1 === arg2) {
    return block.fn(this);
  }
  return block.inverse(this);
});

export default class ProfileField extends Block {
  init() {
    const { userInputProps, linkProps, passwordInputProps } = this.props;
    if (userInputProps) {
      this.children.userInput = new Input(userInputProps);
    }
    if (linkProps) {
      this.children.link = new Link(linkProps);
    }
    if (passwordInputProps) {
      this.children.passwordInput = new Input(passwordInputProps);
    }
  }

  render() {
    const template = Handlebars.compile(profileFieldTemplate);
    console.log(this.props);
    console.log(this.children);
    const component = this.compile(template, this.props);
    console.log(component);
    return component;
  }
}
