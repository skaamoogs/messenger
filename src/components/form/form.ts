import Handlebars from "handlebars";
import { ROUTES } from "../../const";
import Block from "../../modules/block";
import { checkPasswords, formValidator, logData } from "../../utils/validate";
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
        keyup: (event: Event) => this.checkPassword(event),
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

    this.children.errorPassword = new ErrorMessage({
      text: "",
    });

    this.children.inputFields = inputFieldList.map(
      (props) =>
        new InputField({
          ...props,
          inputFieldClassName,
          labelClassName,
          validation: true,
        })
    );

    this.children.button = new Button(buttonProps);

    this.children.link = new Link(linkProps);

    this.children.linkToChat = new Link({
      text: "В чат",
      route: ROUTES.chat,
      className: "registration-form-link",
    });
  }

  validate(event: Event) {
    const error = this.children.error as ErrorMessage;
    const inputFieldsArray = this.children.inputFields as Block[];
    const test = formValidator(inputFieldsArray);
    event.preventDefault();

    if (!test) {
      error.setProps({ text: "Некоторые поля заполнены неверно." });
      error.show();
    } else {
      const data = logData(this);
      // eslint-disable-next-line no-console
      console.log(data);
    }
  }

  checkPassword(event) {
    const input = event.target as HTMLInputElement;
    const errorPassword = this.children.errorPassword as ErrorMessage;
    if (input.name === "confirmPassword") {
      const inputFieldsArray = this.children.inputFields as Block[];
      const test = checkPasswords(inputFieldsArray);
      if (!test) {
        errorPassword.setProps({ text: "Пароли не совпадают" });
        errorPassword.show();
      } else {
        errorPassword.hide();
      }
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
