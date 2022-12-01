import Handlebars from "handlebars";
import Block from "../../modules/block";
import { formValidator, logData } from "../../utils/validate";
import Button from "../button/button";
import ErrorMessage from "../error-message/error-message";
import InputField from "../input-field/input-field";
import Link from "../link/link";
import formTemplate from "./form.tmpl";

export default class Form extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        submit: (event: Event) => this.validate(event),
        focusin: () => this.clearError(),
      },
    });
  }

  init() {
    const {
      inputFieldList,
      buttonProps,
      linkProps,
      inputFieldClassName,
      labelClassName,
    } = this.props;

    this.children.error = new ErrorMessage({
      text: "",
    });

    this.children.inputFields = inputFieldList.map(
      (props) =>
        new InputField({
          ...props,
          inputFieldClassName,
          labelClassName,
          validation: true,
        }),
    );

    this.children.button = new Button(buttonProps);

    this.children.link = new Link(linkProps);

    this.children.linkToChat = new Link({
      text: "В чат",
      route: "/",
      className: "registration-form-link",
    });
  }

  validate(event: Event) {
    const error = this.children.error as ErrorMessage;
    const inputFieldsArray = this.children.inputFields as Block[];
    const { test, message } = formValidator(inputFieldsArray);
    event.preventDefault();

    if (!test) {
      error.setProps({ text: message });
      error.show();
    } else {
      const data = logData(this);
      console.log(data);
    }
  }

  clearError() {
    const error = this.children.error as ErrorMessage;
    error.hide();
  }

  render() {
    const template = Handlebars.compile(formTemplate);
    return this.compile(template, this.props);
  }
}
