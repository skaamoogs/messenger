import Handlebars from "handlebars";
import Form from "../../components/form/form";
import Block from "../../modules/block";
import signUpProps from "./sign-up.props";
import signUpTemplate from "./sign-up.tmpl";

export default class SignUp extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form(signUpProps);
  }

  render() {
    const template = Handlebars.compile(signUpTemplate);
    return this.compile(template, this.props);
  }
}
