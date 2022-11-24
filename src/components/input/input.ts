import Handlebars from "handlebars";
import Block from "../../modules/block";
import inputTemplate from "./input.tmpl";

export default class Input extends Block {
  render() {
    const template = Handlebars.compile(inputTemplate);
    return this.compile(template, this.props);
  }
}
