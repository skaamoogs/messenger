import Handlebars from "handlebars";
import Block from "../../modules/block";
import { Events } from "../../utils/types";
import { inputValidator, RULES } from "../../utils/validate";
import ErrorMessage from "../error-message/error-message";
import Input, { InputProps } from "../input/input";
import inputFieldTemplate from "./input-field.tmpl";

export interface InputFieldProps {
  label?: string;
  inputFieldClassName?: string;
  labelClassName?: string;
  inputProps: InputProps;
  validation: boolean;
  events?: Events;
}

export default class InputField extends Block<InputFieldProps> {
  constructor(props: InputFieldProps) {
    super({
      ...props,
      events: {
        focusin: () => this.clearError(),
        focusout: (event: Event) => this.validate(event),
      },
    });
  }

  init() {
    const inputProps = this.props.inputProps as InputProps;

    this.children.input = new Input(inputProps);

    this.children.error = new ErrorMessage({ text: "Error" });
  }

  validate(event: Event) {
    const inputProps = this.props.inputProps as InputProps;
    const validation = this.props.validation as boolean;
    if (validation) {
      const name = inputProps.name as string;

      const target = event.target as HTMLTextAreaElement;
      const error = this.children.error as ErrorMessage;

      if (name !== "confirmPassword" && !inputValidator(name, target.value)) {
        if (name in RULES) {
          error.setProps({ text: RULES[name].message });
          error.show();
        }
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
