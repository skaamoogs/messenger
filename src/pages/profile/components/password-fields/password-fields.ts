import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import passwordFieldsTemplate from "./password-fields.tmpl";
import passwordFieldsProps from "./password-fields.props";
import Input from "../../../../components/input/input";

const { fields, className } = passwordFieldsProps;

export default class PasswordFields extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.inputs = fields.map(
      (field) => new Input({ ...field, className }),
    );
  }

  render() {
    const template = Handlebars.compile(passwordFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
