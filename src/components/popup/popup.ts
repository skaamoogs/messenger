import Handlebars from "handlebars";
import Block from "../../modules/block";
import Button from "../button/button";
import InputField from "../input-field/input-field";
import TextField from "./components/text-field";
import popupTemplate from "./popup.tmpl";

export const POPUP_TYPES = {
  input: "input",
  text: "text",
};

export default class Popup extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        change: (event: Event) => this.fileLoaded(event),
      },
    });
  }

  init() {
    const { inputFieldProps, textProps, buttonProps, type } = this.props;
    this.children.input = new InputField({
      ...inputFieldProps,
    });
    this.children.text = new TextField(textProps);
    this.children.button = new Button(buttonProps);
  }

  fileLoaded(event: Event) {
    const input = event.target as HTMLInputElement;
    const text = this.children.text as TextField;
    const inputField = this.children.input as InputField;
    if (input.files) {
      const file = input.files[0];
      text.setProps({ text: file.name });
      inputField.hide();
    }
  }

  render() {
    const template = Handlebars.compile(popupTemplate);
    return this.compile(template, this.props);
  }
}
