import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import passwordFieldsTemplate from "./password-fields.tmpl";
import passwordFieldsProps from "./password-fields.props";
import InputField from "../../../../components/input-field/input-field";

export default class PasswordFields extends Block<typeof passwordFieldsProps> {
  constructor() {
    super(passwordFieldsProps);
  }

  init() {
    const { fields, inputFieldClassName } = this.props;

    this.children.inputs = fields.map(
      (field) =>
        new InputField({ ...field, inputFieldClassName }),
    );
  }

  render() {
    const template = Handlebars.compile(passwordFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
