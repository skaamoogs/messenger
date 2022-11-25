import Handlebars from "handlebars";
import Block from "../../modules/block";
import Button from "../button/button";
import Input, { InputProps } from "../input/input";
import Link from "../link/link";
import formTemplate from "./form.tmpl";

export default class Form extends Block {
  init() {
    const {
      inputsList,
      buttonProps,
      inputClassName,
      labelClassName,
      linkProps,
    } = this.props;

    this.children.button = new Button(buttonProps);

    this.children.inputs = inputsList.map(
      (inputProps: InputProps) =>
        new Input({ ...inputProps, inputClassName, labelClassName }),
    );

    this.children.link = new Link(linkProps);
  }

  render() {
    const template = Handlebars.compile(formTemplate);
    return this.compile(template, this.props);
  }
}
