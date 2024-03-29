import Handlebars from "handlebars";
import Block from "../../modules/block";
import { Events } from "../../utils/types";
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

  getValue() {
    return (this.getContent() as HTMLInputElement).value;
  }

  getName() {
    return (this.getContent() as HTMLInputElement).name;
  }

  setValue(value: string) {
    (this.getContent() as HTMLInputElement).value = value;
  }

  render() {
    const template = Handlebars.compile(inputTemplate);
    const content = this.compile(template, this.props);
    return content;
  }
}
