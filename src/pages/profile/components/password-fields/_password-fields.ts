import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import passwordFieldsTemplate from "./password-fields.tmpl";
import passwordFieldsProps from "./password-fields.props";
import Input from "../../../../components/input/input";

export default class PasswordFields extends Block {
  constructor() {
    super(passwordFieldsProps);
  }

  init() {
    const { oldInputProps, newInputProps, confirmInputProps } = this.props;

    this.children.oldInput = new Input(oldInputProps);

    this.children.newInput = new Input(newInputProps);

    this.children.confirmInput = new Input(confirmInputProps);
  }

  render() {
    console.log(this.children);
    const template = Handlebars.compile(passwordFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
