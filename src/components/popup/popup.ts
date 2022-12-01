import Handlebars from "handlebars";
import Block from "../../modules/block";
import { inputValidator } from "../../utils/validate";
import Button from "../button/button";
import ErrorMessage from "../error-message/error-message";
import InputField from "../input-field/input-field";
import TextField from "./components/text-field";
import popupTemplate from "./popup.tmpl";

export default class Popup extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        change: (event: Event) => this.fileLoaded(event),
        submit: (event: Event) => this.validate(event),
      },
    });
  }

  init() {
    const { inputFieldProps, textProps, buttonProps } = this.props;
    this.children.input = new InputField({
      ...inputFieldProps,
    });
    this.children.text = new TextField(textProps);
    this.children.button = new Button(buttonProps);
    this.children.error = new ErrorMessage({ text: "" });
  }

  fileLoaded(event: Event) {
    const input = event.target as HTMLInputElement;
    const error = this.children.error as ErrorMessage;
    if (input.type === "file") {
      const text = this.children.text as TextField;
      const inputField = this.children.input as InputField;
      if (input.files) {
        const file = input.files[0];
        text.setProps({ text: file.name });
        inputField.hide();
        error.hide();
      }
    }
  }

  validate(event: Event) {
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("input");
    const error = this.children.error as ErrorMessage;
    if (input) {
      if (input.type === "file") {
        if (input.value) {
          error.hide();
        } else {
          event.preventDefault();
          error.setProps({ text: "Нужно выбрать файл." });
          error.show();
        }
      } else if (!inputValidator(input.name, input.value)) {
        event.preventDefault();
        error.setProps({ text: "Данные введены неверно." });
        error.show();
      } else {
        console.log({ [input.name]: input.value });
      }
    }
  }

  render() {
    const template = Handlebars.compile(popupTemplate);
    return this.compile(template, this.props);
  }
}
