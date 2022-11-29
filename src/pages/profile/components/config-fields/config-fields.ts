import Handlebars from "handlebars";
import Link, { LinkProps } from "../../../../components/link/link";
import Block from "../../../../modules/block";
import configFieldsProps from "./config-fields.props";
import configFieldsTemplate from "./config-fields.tmpl";

export default class ConfigFields extends Block {
  constructor() {
    super(configFieldsProps);
  }

  init() {
    const { fields, className } = this.props;

    this.children.fields = fields.map(
      (field: LinkProps) => new Link({ ...field, className }),
    );
  }

  render() {
    const template = Handlebars.compile(configFieldsTemplate);
    return this.compile(template, { ...this.props });
  }
}
