import Handlebars from "handlebars";
import Block from "../../modules/block";
import buttonTemplate from "./button.tmpl";

export interface ButtonProps {
  type?: string;
  className?: string;
  label?: string;
  image?: string;
  alt?: string;
  events?: {
    click: () => void;
  };
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      type: "button",
      ...props,
      events: { click: () => console.log("clicked") },
    });
  }

  render() {
    const template = Handlebars.compile(buttonTemplate);
    return this.compile(template, this.props);
  }
}
