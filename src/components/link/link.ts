import Handlebars from "handlebars";
import Block from "../../modules/block";
import linkTemplate from "./link.tmpl";

export interface LinkProps {
  text: string;
  route: string;
  className?: string;
}

export default class Link extends Block {
  constructor(props: LinkProps) {
    super({ ...props });
  }

  render() {
    const template = Handlebars.compile(linkTemplate);
    return this.compile(template, this.props);
  }
}
