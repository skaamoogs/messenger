import Handlebars from "handlebars";
import Block from "../../../modules/block";

export interface TextProps {
  text?: string;
  className?: string;
}

export default class TextField extends Block<TextProps> {
  constructor(props: TextProps) {
    super({ ...props });
  }

  render() {
    const template = Handlebars.compile(
      '<p class="{{className}}">{{text}}</p>'
    );
    return this.compile(template, this.props);
  }
}
