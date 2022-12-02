import Handlebars from "handlebars";
import Block from "../../modules/block";
import errorTemplate from "./error-message.tmpl";

export interface ErrorProps {
  text: string;
}

export default class ErrorMessage extends Block {
  constructor(props: ErrorProps) {
    super({ ...props });
  }

  render() {
    const template = Handlebars.compile(errorTemplate);
    return this.compile(template, this.props);
  }
}
