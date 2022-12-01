import Handlebars from "handlebars";
import Block from "../../modules/block";
import { inputValidator, RULES } from "../../utils/validate";
import ErrorMessage from "../error-message/error-message";
import Input from "../input/input";
import inputFieldTemplate from "./input-field.tmpl";

export default class InputField extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        focusin: () => this.clearError(),
        focusout: (event: Event) => this.validate(event),
      },
    });
  }

  init() {
    const { inputProps, inputClassName } = this.props;

    this.children.input = new Input({ ...inputProps, inputClassName });

    const { name } = inputProps;
    if (name in Object.keys(RULES)) {
      this.children.error = new ErrorMessage({ text: RULES[name].message });
    }
  }

  validate(event: Event) {
    const { inputProps, validation } = this.props;
    if (validation) {
      const { name } = inputProps;

      const target = event.target as HTMLTextAreaElement;
      const error = this.children.error as ErrorMessage;

      if (!inputValidator(name, target.value)) {
        error.show();
      }
    }
  }

  clearError() {
    const { validation } = this.props;
    if (validation) {
      const error = this.children.error as ErrorMessage;
      error.hide();
    }
  }

  render() {
    const template = Handlebars.compile(inputFieldTemplate);
    return this.compile(template, this.props);
  }
}
