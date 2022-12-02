import Handlebars from "handlebars";
import Block from "../../../modules/block";

interface Text {
  text: string;
  className?: string;
}

export default class TextField extends Block {
  constructor(props: Text) {
    super({ ...props });
  }

  render() {
    const template = Handlebars.compile(
      '<p class="{{className}}">{{text}}</p>',
    );
    return this.compile(template, this.props);
  }
}
