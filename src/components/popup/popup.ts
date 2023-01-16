import Handlebars from "handlebars";
import { ROUTES } from "../../const";
import ChatsController from "../../controllers/chats.controller";
import UserController from "../../controllers/user.controller";
import withStore from "../../hocs/with-store";
import Block from "../../modules/block";
import router from "../../utils/route/router";
import { Events, Indexed } from "../../utils/types";
import { inputValidator } from "../../utils/validate";
import Button, { ButtonProps } from "../button/button";
import ErrorMessage from "../error-message/error-message";
import InputField, { InputFieldProps } from "../input-field/input-field";
import TextField, { TextProps } from "./components/text-field";
import popupTemplate from "./popup.tmpl";

export interface PopupProps {
  title: string;
  textProps: TextProps;
  inputFieldProps: InputFieldProps;
  buttonProps: ButtonProps;
  events?: Events;
  selectedChatId: number;
  action: string;
  id?: string;
}

class PopupBase extends Block<PopupProps> {
  constructor(props: PopupProps) {
    super({
      ...props,
      events: {
        change: (event: Event) => this.fileLoaded(event),
        submit: (event: Event) => this.validate(event),
        focusin: () => this.clearError(),
      },
    });
  }

  init() {
    const { inputFieldProps, textProps, buttonProps } = this.props;
    this.children.input = new InputField(inputFieldProps);
    this.children.text = new TextField(textProps);
    this.children.button = new Button(buttonProps);
    this.children.error = new ErrorMessage({ text: "" });
  }

  componentDidUpdate(_oldProps: PopupProps, _newProps: PopupProps): boolean {
    const { inputFieldProps, buttonProps } = _newProps;

    this.children.input = new InputField(inputFieldProps);
    this.children.button = new Button(buttonProps);

    return true;
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
        inputField.setProps({ label: "" });
        error.hide();
      }
    }
  }

  validate(event: Event) {
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("input");
    event.preventDefault();
    if (input) {
      if (input.type === "file") {
        if (input.value) {
          this.clearError();
          const formData = new FormData(form);
          if (form.id === "change_profile_avatar") {
            UserController.changeAvatar(formData);
          }
          if (form.id === "change_chat_avatar") {
            formData.append("chatId", `${this.props.selectedChatId}`);
            ChatsController.changeAvatar(formData);
          }
        } else {
          this.showError({ text: "Нужно выбрать файл." });
        }
      } else if (!inputValidator(input.name, input.value)) {
        this.showError({ text: "Данные введены неверно." });
      } else {
        switch (this.props.action) {
          case "add_user":
            this.addUser(input.value);
            break;
          case "delete_user":
            this.deleteUser(input.value);
            break;
          case "create_chat":
            this.createChat(input.value);
            break;
          default:
            break;
        }
      }
    }
  }

  createChat(value: string) {
    ChatsController.create(value);
  }

  addUser(value: string) {
    UserController.searchUser(value).then((user) => {
      if (user) {
        ChatsController.addUser(this.props.selectedChatId, user.id);
        router.go(ROUTES.chat);
      } else {
        this.showError({ text: "Пользователя с таким логином не существует." });
      }
    });
  }

  deleteUser(value: string) {
    UserController.searchUser(value).then((user) => {
      if (user) {
        ChatsController.deleteUser(this.props.selectedChatId, user.id);
        router.go(ROUTES.chat);
      } else {
        this.showError({ text: "Пользователя с таким логином не существует." });
      }
    });
  }

  showError(props: Indexed) {
    const error = this.children.error as ErrorMessage;
    error.setProps(props);
    error.show();
  }

  clearError() {
    const error = this.children.error as ErrorMessage;
    error.hide();
  }

  render() {
    const template = Handlebars.compile(popupTemplate);
    return this.compile(template, this.props);
  }
}

const withSelectedChatId = withStore((state) => ({
  selectedChatId: state.selectedChat?.id,
}));
const Popup = withSelectedChatId(PopupBase as typeof Block);

export default Popup;
