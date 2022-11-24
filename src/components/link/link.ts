import Handlebars from "handlebars";
import Block from "../../modules/block";
import linkTemplate from "./link.tmpl";

export default class Link extends Block {
  render() {
    const template = Handlebars.compile(linkTemplate);
    return this.compile(template, this.props);
  }
}
