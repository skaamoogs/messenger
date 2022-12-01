import Handlebars from "handlebars";
import Button from "../../../../components/button/button";
import ErrorMessage from "../../../../components/error-message/error-message";
import ROUTES from "../../../../const";
import Block from "../../../../modules/block";
import { formValidator, logData } from "../../../../utils/validate";
import PasswordFields from "../password-fields/password-fields";
import UserFields from "../user-fields/user-fields";
import profileFormProps from "./profile-form.props";
import profileFormTemplate from "./profile-form.tmpl";

const { pathname } = window.location;

export default class ProfileForm extends Block {
  constructor() {
    super({
      ...profileFormProps,
      events: {
        submit: (event: Event) => this.validate(event),
        focusin: () => this.clearError(),
      },
    });
  }

  init() {
    const { saveButtonProps } = this.props;

    this.children.error = new ErrorMessage({ text: "" });

    switch (pathname) {
      case ROUTES.profile: {
        this.children.user = new UserFields({ validation: false });
        const user = this.children.user as UserFields;
        const inputs = user.getContent()?.querySelectorAll("input");
        inputs?.forEach((input) => {
          input.setAttribute("readonly", "readonly");
        });
        break;
      }
      case ROUTES.password: {
        this.children.password = new PasswordFields();
        this.children.saveButton = new Button({ ...saveButtonProps });
        break;
      }
      case ROUTES.data: {
        this.children.user = new UserFields({ validation: true });
        this.children.saveButton = new Button({ ...saveButtonProps });
        break;
      }
      default:
        break;
    }
  }

  validate(event: Event) {
    const error = this.children.error as ErrorMessage;
    let fields: Block[] | null = null;
    if (pathname === ROUTES.data) {
      const user = this.children.user as UserFields;
      fields = user.children.inputs as Block[];
    }
    if (pathname === ROUTES.password) {
      const password = this.children.password as PasswordFields;
      fields = password.children.inputs as Block[];
    }
    const { test, message } = formValidator(fields as Block[]);
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
    const template = Handlebars.compile(profileFormTemplate);
    return this.compile(template, { ...this.props });
  }
}
