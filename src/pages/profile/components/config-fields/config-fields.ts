import Handlebars from "handlebars";
import Button from "../../../../components/button/button";
import Link from "../../../../components/link/link";
import Block from "../../../../modules/block";
import configFieldsProps from "./config-fields.props";
import configFieldsTemplate from "./config-fields.tmpl";

export default class ConfigFields extends Block<typeof configFieldsProps> {
  constructor() {
    super(configFieldsProps);
  }

  init() {
    const { fields, className, buttonProps } = this.props;

    this.children.fields = fields.map(
      (field) => new Link({ ...field, className })
    );

    this.children.button = new Button(buttonProps);
  }

  render() {
    const template = Handlebars.compile(configFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
