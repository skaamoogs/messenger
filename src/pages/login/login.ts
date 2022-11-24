import Handlebars from "handlebars";
import Button from "../../components/button/button";
import formTemplate from "../../components/form/form.tmpl";
import Input from "../../components/input/input";
import Block from "../../modules/block";
import loginProps from "./login.data";

/* const template = Handlebars.compile(formTemplate);
const loginContent = template(loginData);

export default loginContent; */

const { mainProps, inputsList, buttonProps, inputClassName, labelClassName } =
  loginProps;

export default class Login extends Block {
  constructor() {
    super(mainProps);
  }

  init() {
    this.children.button = new Button({
      ...buttonProps,
      events: { click: () => console.log("clicked") },
    });
    this.children.inputs = inputsList.map(
      (inputProps) =>
        new Input({ ...inputProps, inputClassName, labelClassName }),
    );
  }

  render() {
    const template = Handlebars.compile(formTemplate);
    return this.compile(template, this.props);
  }
}
