import Handlebars from "handlebars";
import { LoginData, SignUpData } from "../../api/auth.api";
import { ROUTES } from "../../const";
import AuthController from "../../controllers/auth.controller";
import Block from "../../modules/block";
import router from "../../utils/route/router";
import { Events } from "../../utils/types";
import { checkPasswords, formValidator, logData } from "../../utils/validate";
import Button, { ButtonProps } from "../button/button";
import ErrorMessage from "../error-message/error-message";
import InputField, { InputFieldProps } from "../input-field/input-field";
import Link, { LinkProps } from "../link/link";
import formTemplate from "./form.tmpl";

interface FormProps {
  inputFieldList: InputFieldProps[];
  buttonProps: ButtonProps;
  linkProps: LinkProps;
  inputFieldClassName: string;
  labelClassName: string;
  events?: Events;
}

export default class Form extends Block<FormProps> {
  constructor(props: FormProps) {
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

    this.children.link = new Link({
      ...linkProps,
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
      const pathname = router.getCurrentPathname();
      if (pathname === ROUTES.login) {
        const data = logData(this) as unknown as LoginData;
        AuthController.login(data).then(
          (_) => {
            router.go(ROUTES.chat);
          },
          (reason) => {
            error.setProps({ text: reason.reason });
            error.show();
          }
        );
      }
      if (pathname === ROUTES.signUp) {
        const data = logData(this) as unknown as SignUpData;
        AuthController.signUp(data).then(
          (_) => {
            router.go(ROUTES.chat);
          },
          (reason) => {
            error.setProps({ text: reason.reason });
            error.show();
          }
        );
      }
    }
  }

  checkPassword(event: Event) {
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

  goToChat() {
    router.go(ROUTES.chat);
  }

  render() {
    const template = Handlebars.compile(formTemplate);
    return this.compile(template, this.props);
  }
}
