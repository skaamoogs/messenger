import Handlebars from "handlebars";
import Block from "../../modules/block";
import Input from "../input/input";
import inputFieldTemplate from "./input-field.tmpl";

export default class InputField extends Block {
  constructor(props) {
    super({
      ...props,
      valid: true,
      events: {
        focusin: () => this.clearError(),
        focusout: (event: Event) => this.validate(event),
      },
    });
  }

  init() {
    const { inputProps, inputClassName } = this.props;
    this.children.input = new Input({ ...inputProps, inputClassName });
  }

  validate(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const { pattern } = this.props;
    if (pattern && !pattern.test(target.value)) {
      this.setProps({ valid: false });

      if (event.target) {
        console.log(`${event.target.id}: not valid value`);
      }
    }
  }

  clearError() {
    if (!this.isValid) {
      this.setProps({ valid: true });
    }
  }

  get isValid() {
    return this.props.valid;
  }

  render() {
    console.log("input field render");
    console.log(this);
    const template = Handlebars.compile(inputFieldTemplate);
    const content = this.compile(template, this.props);
    return content;
  }
}
