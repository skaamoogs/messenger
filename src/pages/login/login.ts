import Handlebars from "handlebars";
import Form from "../../components/form/form";
import Block from "../../modules/block";
import loginProps from "./login.props";
import loginTemplate from "./login.tmpl";

export default class Login extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form(loginProps);
  }

  render() {
    const template = Handlebars.compile(loginTemplate);
    return this.compile(template, this.props);
  }
}
