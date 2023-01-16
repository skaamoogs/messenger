import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Link from "../../components/link/link";
import Popup from "../../components/popup/popup";
import { resourceURL, ROUTES } from "../../const";
import ChatsController from "../../controllers/chats.controller";
import withStore from "../../hocs/with-store";
import Block from "../../modules/block";
import { IChatExntended, State, User } from "../../utils/interfaces";
import router from "../../utils/route/router";
import chatPageProps from "./chat-page.props";
import chatPageTemplate from "./chat-page.tmpl";
import ChatList from "./components/chat-list/chat-list";
import chatListProps from "./components/chat-list/chat-list.props";
import Messenger from "./components/messenger/messenger";

import SettingsWindow from "./components/settings-window/settings-window";

type ChatPageProps = typeof chatPageProps;
export interface IChatPageProps extends ChatPageProps {
  chats: IChatExntended[];
  selectedChat: IChatExntended;
  user: User;
}

class ChatPageBase extends Block<IChatPageProps> {
  constructor(props: IChatPageProps) {
    super({ ...props });
  }

  init() {
    const {
      avatarProps,
      settingsButtonProps,
      profileLinkProps,
      searchInputProps,
      popupProps,
    } = this.props;

    this.children.messenger = new Messenger({});

    this.children.profileLink = new Link(profileLinkProps);

    this.children.searchInput = new Input({
      ...searchInputProps,
      events: {
        input: () => this.filterChats(),
      },
    });

    this.children.chatList = new ChatList({
      ...chatListProps,
      isLoaded: false,
      filteredChats: this.getFilteredChats(this.props),
      events: {
        click: (event: Event) => this.callPopup(event),
      },
    });

    const avatar = this.props.selectedChat?.avatar;

    if (avatar) {
      this.children.userAvatar = new Avatar({
        ...avatarProps,
        src: `${resourceURL}${avatar}`,
      });
    }

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

    this.children.popup = new Popup({
      ...popupProps,
    });

    ChatsController.getChats().finally(() => {
      const filteredChats = this.getFilteredChats(this.props);
      (this.children.chatList as Block).setProps({
        filteredChats,
      });
    });
  }

  componentDidUpdate(
    _oldProps: IChatPageProps,
    _newProps: IChatPageProps
  ): boolean {
    const { chatList } = this.children;
    (chatList as Block).setProps({
      filteredChats: this.getFilteredChats(_newProps),
    });
    const avatar = _newProps.selectedChat?.avatar;
    if (avatar) {
      this.children.userAvatar = new Avatar({
        ..._newProps.avatarProps,
        src: `${resourceURL}${avatar}`,
      });
    }

    return true;
  }

  componentDidRender(): boolean {
    const messenger =
      this.getContent()?.getElementsByClassName("messenger-main")[0];
    console.log(messenger);
    if (messenger) {
      messenger.scrollTop = 999999;
      console.log("did-render", messenger.scrollTop);
    }

    return true;
  }

  getFilteredChats(props: IChatPageProps) {
    const searchValue = (this.children.searchInput as Input).getValue();
    const filteredChats = props.chats.filter((chat) =>
      chat.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredChats;
  }

  filterChats() {
    const { chatList } = this.children;
    (chatList as Block).setProps({
      filteredChats: this.getFilteredChats(this.props),
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
    const target = event.target as HTMLElement;
    const popup = this.children.popup as Block;
    switch (target.id) {
      case "add_user":
        popup.setProps({
          title: "Добавить пользователя",
          buttonProps: {
            type: "submit",
            className: "primary-button",
            label: "Добавить",
          },
          action: target.id,
        });
        popup.show("flex");
        break;
      case "delete_user":
        popup.setProps({
          title: "Удалить пользователя",
          buttonProps: {
            type: "submit",
            className: "primary-button",
            label: "Удалить",
          },
          action: target.id,
        });
        popup.show("flex");
        break;
      case "create_chat":
        popup.setProps({
          title: "Создать чат",
          inputFieldProps: {
            label: "Название",
            labelClassName: "input-label",
            inputFieldClassName: "input-field",
            inputProps: {
              type: "text",
              name: "chat",
            },
            validation: true,
          },
          buttonProps: {
            type: "submit",
            className: "primary-button",
            label: "Создать",
          },
          action: target.id,
        });
        popup.show("flex");
        break;
      case "change_chat_avatar":
        popup.setProps({
          title: "Загрузите файл аватара",
          textProps: {
            text: "",
            className: "file-text",
          },
          inputFieldProps: {
            label: "Выбрать файл на компьютере",
            labelClassName: "file-input-label",
            inputFieldClassName: "input-popup-profile",
            inputProps: {
              type: "file",
              className: "file-input",
              name: "avatar",
              accept: ".jpg, .jpeg, .png",
            },
            validation: false,
          },
          buttonProps: {
            type: "submit",
            className: "primary-button",
            label: "Поменять",
          },
          id: `${target.id}`,
        });
        popup.show("flex");
        break;
      default:
        break;
    }
  }

  render() {
    const template = Handlebars.compile(chatPageTemplate);
    return this.compile(template, this.props);
  }
}

function mapChatToProps(state: State) {
  const { chats, selectedChat, user } = state;

  return {
    user,
    chats: chats || [],
    selectedChat,
  };
}

const withUser = withStore(mapChatToProps);
const ChatPage = withUser(ChatPageBase as typeof Block);

export default ChatPage;
