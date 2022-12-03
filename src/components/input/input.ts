import Handlebars from "handlebars";
import Block from "../../modules/block";
import { Events } from "../../utils/type";
import inputTemplate from "./input.tmpl";

export interface InputProps {
  name?: string;
  type: string;
  placeholder?: string;
  errorText?: string;
  className?: string;
  events?: Events;
}

export default class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({
      ...props,
    });
  }

  render() {
    const template = Handlebars.compile(inputTemplate);
    const content = this.compile(template, this.props);
    return content;
  }
}
