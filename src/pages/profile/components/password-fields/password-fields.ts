import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import passwordFieldsTemplate from "./password-fields.tmpl";
import passwordFieldsProps from "./password-fields.props";
import InputField from "../../../../components/input-field/input-field";

const { fields, inputFieldClassName } = passwordFieldsProps;

export default class PasswordFields extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.inputs = fields.map(
      (field) =>
        new InputField({ ...field, inputFieldClassName, validation: true }),
    );
  }

  render() {
    const template = Handlebars.compile(passwordFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
