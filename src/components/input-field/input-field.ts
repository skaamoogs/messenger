import Handlebars from "handlebars";
import Block from "../../modules/block";
import Input from "../input/input";
import inputFieldTemplate from "./input-field.tmpl";

export default class InputField extends Block {
  init() {
    const { inputProps, inputClassName } = this.props;
    this.children.input = new Input({ ...inputProps, inputClassName });
  }

  render() {
    const template = Handlebars.compile(inputFieldTemplate);
    const content = this.compile(template, this.props);
    return content;
  }
}
