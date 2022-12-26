import Handlebars from "handlebars";
import { PasswordData, ProfileData } from "../../../../api/user.api";
import Button from "../../../../components/button/button";
import ErrorMessage from "../../../../components/error-message/error-message";
import { ROUTES } from "../../../../const";
import UserController from "../../../../controllers/user.controller";
import Block from "../../../../modules/block";
import router from "../../../../utils/route/router";
import { Events } from "../../../../utils/types";
import {
  checkPasswords,
  formValidator,
  logData,
} from "../../../../utils/validate";
import PasswordFields from "../password-fields/password-fields";
import UserFields from "../user-fields/user-fields";
import profileFormProps from "./profile-form.props";
import profileFormTemplate from "./profile-form.tmpl";

type TProfileFormProps = typeof profileFormProps;

interface ProfileFormProps extends TProfileFormProps {
  events?: Events;
}

export default class ProfileForm extends Block<ProfileFormProps> {
  constructor() {
    super({
      ...profileFormProps,
      events: {
        submit: (event: Event) => this.validate(event),
        focusin: () => this.clearError(),
        keyup: (event: Event) => this.checkPassword(event),
      },
    });
  }

  init() {
    const { saveButtonProps } = this.props;

    this.children.error = new ErrorMessage({ text: "" });

    this.children.errorPassword = new ErrorMessage({ text: "" });

    const pathname = router.getCurrentPathname();

    switch (pathname) {
      case ROUTES.profile: {
        this.children.user = new UserFields({ validation: false });
        const { user } = this.children;
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

  findInputFields() {
    const pathname = router.getCurrentPathname();

    if (pathname === ROUTES.data) {
      const user = this.children.user as Block;
      return user.children.inputs as Block[];
    }
    if (pathname === ROUTES.password) {
      const password = this.children.password as PasswordFields;
      return password.children.inputs as Block[];
    }
    return null;
  }

  validate(event: Event) {
    const error = this.children.error as ErrorMessage;
    const fields = this.findInputFields();
    const test = formValidator(fields as Block[]);
    event.preventDefault();

    if (!test) {
      error.setProps({ text: "Некоторые поля заполнены неверно." });
      error.show();
    } else {
      const pathname = router.getCurrentPathname();
      if (pathname === ROUTES.data) {
        const data = logData(this) as unknown as ProfileData;
        UserController.changeProfile(data);
      } else if (pathname === ROUTES.password) {
        const data = logData(this) as unknown as PasswordData;
        UserController.changePassword(data);
      }
    }
  }

  checkPassword(event: Event) {
    const errorPassword = this.children.errorPassword as ErrorMessage;
    const input = event.target as HTMLInputElement;
    if (input.name === "confirmPassword") {
      const fields = this.findInputFields();
      if (fields) {
        const test = checkPasswords(fields);
        if (!test) {
          errorPassword.setProps({ text: "Пароли не совпадают" });
          errorPassword.show();
        } else {
          errorPassword.hide();
        }
      }
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
