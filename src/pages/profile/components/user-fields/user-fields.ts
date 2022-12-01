import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import userFieldsTemplate from "./user-fields.tmpl";
import userFieldsProps from "./user-fields.props";
import InputField from "../../../../components/input-field/input-field";

const { fields, inputFieldClassName } = userFieldsProps;

export default class UserFields extends Block {
  init() {
    const { validation } = this.props;
    this.children.inputs = fields.map(
      (field) => new InputField({ ...field, inputFieldClassName, validation }),
    );
  }

  render() {
    const template = Handlebars.compile(userFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
