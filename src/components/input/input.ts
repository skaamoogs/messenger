import Handlebars from "handlebars";
import Block from "../../modules/block";
import inputTemplate from "./input.tmpl";

export interface InputProps {
  name?: string;
  type: string;
  placeholder?: string;
  errorText?: string;
  events?: {
    focus: () => void;
    blur: () => void;
  };
}

export default class Input extends Block {
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
