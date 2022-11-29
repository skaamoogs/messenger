import Handlebars from "handlebars";
import Block from "../../modules/block";
import Button from "../button/button";
import InputField from "../input-field/input-field";
import Link from "../link/link";
import formTemplate from "./form.tmpl";

export default class Form extends Block {
  init() {
    const {
      inputFieldList,
      buttonProps,
      linkProps,
      inputFieldClassName,
      inputClassName,
      labelClassName,
    } = this.props;

    this.children.button = new Button(buttonProps);

    this.children.inputFields = inputFieldList.map(
      (props) =>
        new InputField({
          ...props,
          inputFieldClassName,
          inputClassName,
          labelClassName,
        }),
    );

    this.children.link = new Link(linkProps);
  }

  render() {
    const template = Handlebars.compile(formTemplate);
    return this.compile(template, this.props);
  }
}
