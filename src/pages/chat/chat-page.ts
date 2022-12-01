import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Link from "../../components/link/link";
import Popup from "../../components/popup/popup";
import registerHelperTimes from "../../helpers/handlebars";
import Block from "../../modules/block";
import chatPageProps from "./chat-page.props";
import chatPageTemplate from "./chat-page.tmpl";
import Chat from "./components/chat/chat";
import SettingsWindow from "./components/settings-window/settings-window";

registerHelperTimes();

export default class ChatPage extends Block {
  constructor() {
    super({ ...chatPageProps, settingsWindowIsOpen: false });
  }

  init() {
    const {
      chatProps,
      profileLinkProps,
      searchInputProps,
      userAvatarProps,
      messageInputProps,
      settingsButtonProps,
      sendMessageButtonProps,
      popupProps,
    } = this.props;

    this.children.profileLink = new Link(profileLinkProps);

    this.children.searchInput = new Input(searchInputProps);

    this.children.chat = new Chat(chatProps);

    this.children.userAvatar = new Avatar(userAvatarProps);

    this.children.settingsButton = new Button({
      ...settingsButtonProps,
      events: {
        click: () => this.showHideSettings(),
      },
    });

    this.children.messageInput = new Input({ ...messageInputProps });

    this.children.sendMessageButton = new Button(sendMessageButtonProps);

    this.children.settings = new SettingsWindow({
      events: {
        click: (event: Event) => this.callPopup(event),
      },
    });

    this.children.popup = new Popup(popupProps);
  }

  showHideSettings() {
    const settings = this.children.settings as SettingsWindow;
    const settingsButtton = this.children.settingsButton as Button;
    if (!this.props.settingsWindowIsOpen) {
      settings.show();
      settingsButtton.addClass("user-settings-active");
    } else {
      settings.hide();
      settingsButtton.removeClass("user-settings-active");
    }
    this.setProps({ settingsWindowIsOpen: !this.props.settingsWindowIsOpen });
  }

  callPopup(event: Event) {
    const target = event.target as HTMLButtonElement;
    const popup = this.children.popup as Popup;
    if (target.id === "add_user") {
      popup.setProps({
        title: "Добавить пользователя",
        buttonProps: {
          type: "submit",
          className: "primary-button",
          label: "Добавить",
        },
      });
    }
    if (target.id === "delete_user") {
      popup.setProps({
        title: "Удалить пользователя",
        buttonProps: {
          type: "submit",
          className: "primary-button",
          label: "Удалить",
        },
      });
    }
    popup.show("flex");
  }

  render() {
    const template = Handlebars.compile(chatPageTemplate);
    return this.compile(template, this.props);
  }
}
