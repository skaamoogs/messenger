import Handlebars from "handlebars";
import Block from "../../modules/block";
import inputTemplate from "./input.tmpl";

export interface InputProps {
  name: string;
  type: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super({ ...props });
  }

  render() {
    const template = Handlebars.compile(inputTemplate);
    return this.compile(template, this.props);
  }
}
