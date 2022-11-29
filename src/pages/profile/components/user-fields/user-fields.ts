import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import Input from "../../../../components/input/input";
import userFieldsTemplate from "./user-fields.tmpl";
import userFieldsProps from "./user-fields.props";

const { fields, className } = userFieldsProps;

export default class UserFields extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.inputs = fields.map(
      (field) => new Input({ ...field, className }),
    );
  }

  render() {
    const template = Handlebars.compile(userFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
