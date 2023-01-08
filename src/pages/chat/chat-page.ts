import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import Popup from "../../components/popup/popup";
import { resourceURL, ROUTES } from "../../const";
import ChatsController from "../../controllers/chats.controller";
import withStore from "../../hocs/with-store";
import Block from "../../modules/block";
import { State } from "../../utils/interfaces";
import router from "../../utils/route/router";
import chatPageProps from "./chat-page.props";
import chatPageTemplate from "./chat-page.tmpl";
import ChatList from "./components/chat-list/chat-list";
import chatListProps from "./components/chat-list/chat-list.props";
import Messenger from "./components/messenger/messenger";
import messengerProps from "./components/messenger/messenger.props";

import SettingsWindow from "./components/settings-window/settings-window";

type ChatPageProps = typeof chatPageProps;

class ChatPageBase extends Block<ChatPageProps> {
  constructor(props: ChatPageProps) {
    super({ ...props });
  }

  init() {
    const { userProps, settingsButtonProps, popupProps } = this.props;

    this.children.messenger = new Messenger(messengerProps);

    this.children.chatList = new ChatList(chatListProps);

    this.children.userAvatar = new Avatar(userProps.avatar);

    this.children.settingsButton = new Button({
      ...settingsButtonProps,
      events: {
        click: () => this.showHideSettings(),
      },
    });

    this.children.settings = new SettingsWindow({
      events: {
        click: (event: Event) => this.callPopup(event),
      },
    });

    this.children.popup = new Popup({ ...popupProps, textProps: {} });

    ChatsController.getChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });
  }

  goToProfile() {
    router.go(ROUTES.profile);
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

function mapChatToProps(state: State) {
  const { userProps } = chatPageProps;
  const { user } = state;
  let avatar = userProps.avatar.src;
  if (user?.avatar) {
    avatar = `${resourceURL}${user.avatar}`;
  }

  return {
    userProps: {
      ...userProps,
      name: user?.display_name,
      avatar: {
        ...userProps.avatar,
        src: avatar,
      },
    },
  };
}

const withUser = withStore(mapChatToProps);
const ChatPage = withUser(ChatPageBase as typeof Block);

export default ChatPage;
