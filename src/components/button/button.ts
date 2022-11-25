import Handlebars from "handlebars";
import Block from "../../modules/block";
import buttonTemplate from "./button.tmpl";

export interface ButtonProps {
  type?: string;
  className?: string;
  label: string;
  events?: {
    click: () => void;
  };
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super({ type: "button", ...props });
  }

  render() {
    const template = Handlebars.compile(buttonTemplate);
    return this.compile(template, this.props);
  }
}
