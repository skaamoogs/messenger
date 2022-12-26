import Handlebars from "handlebars";
import Block from "../../modules/block";
import { Events } from "../../utils/types";
import buttonTemplate from "./button.tmpl";

export interface ButtonProps {
  type?: string;
  className?: string;
  label?: string;
  image?: string;
  alt?: string;
  events?: Events;
}

export default class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({
      type: "button",
      ...props,
    });
  }

  addClass(className: string) {
    const button = this.getContent();
    button?.classList.add(className);
  }

  removeClass(className: string) {
    const button = this.getContent();
    button?.classList.remove(className);
  }

  render() {
    const template = Handlebars.compile(buttonTemplate);
    return this.compile(template, this.props);
  }
}
