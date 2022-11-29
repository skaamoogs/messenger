import Handlebars from "handlebars";
import Block from "../../modules/block";
import inputTemplate from "./input.tmpl";

export interface InputProps {
  name?: string;
  type: string;
  placeholder?: string;
  pattern?: RegExp;
  errorText?: string;
  events?: {
    focus: () => void;
    blur: () => void;
  };
}

export default class Input extends Block {
  valid: boolean;

  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        focus: () => {
          this.valid = true;
        },
        blur: (event: Event) => this.validate(event),
      },
    });
    this.valid = true;
  }

  validate(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    if (!this.props.pattern.test(target.value)) {
      this.valid = false;
      if (event.target) {
        console.log(`${event.target.id}: not valid value`);
      }
    }
  }

  get isValid() {
    return this.valid;
  }

  render() {
    console.log("input render")
    const template = Handlebars.compile(inputTemplate);
    const content = this.compile(template, this.props);
    return content;
  }
}
