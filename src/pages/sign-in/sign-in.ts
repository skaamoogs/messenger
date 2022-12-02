import Handlebars from "handlebars";
import Form from "../../components/form/form";
import Block from "../../modules/block";
import signInProps from "./sign-in.props";
import signInTemplate from "./sign-in.tmpl";

export default class SignIn extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form(signInProps);
  }

  render() {
    const template = Handlebars.compile(signInTemplate);
    return this.compile(template, this.props);
  }
}
