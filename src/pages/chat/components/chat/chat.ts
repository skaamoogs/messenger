import Handlebars from "handlebars";
import Avatar from "../../../../components/avatar/avatar";
import Button from "../../../../components/button/button";
import { resourceURL } from "../../../../const";
import ChatsController from "../../../../controllers/chats.controller";
import Block from "../../../../modules/block";
import { IChatExntended } from "../../../../utils/interfaces";
import { Events } from "../../../../utils/types";
import chatTemplate from "./chat.tmpl";

interface ChatProps extends IChatExntended {
  selectedChat?: IChatExntended;
  events?: Events;
  userId: number;
}

export default class Chat extends Block<ChatProps> {
  init() {
    this.children.delButton = new Button({
      type: "button",
      className:
        "round-button control-button control-button-chats button-rotate",
      label: "+",
      events: {
        click: () => this.deleteChat(),
      },
    });

    ChatsController.getUsers(this.props.id).then((users) => {
      this.setProps({ users });
    });
  }

  componentDidUpdate(_oldProps: ChatProps, _newProps: ChatProps): boolean {
    const { avatar } = _newProps;
    if (avatar) {
      this.children.messageAvatar = new Avatar({
        className: "chat-avatar-container",
        imageClassName: "avatar author-avatar",
        src: `${resourceURL}${avatar}`,
        alt: "avatar",
      });
    }
    return true;
  }

  getId() {
    return this.props.id;
  }

  deleteChat() {
    ChatsController.deleteChat(this.props.id);
  }

  render() {
    console.log("chat rendered");
    const template = Handlebars.compile(chatTemplate);
    return this.compile(template, {
      ...this.props,
      selected: this.props.id === this.props.selectedChat?.id,
      isDeleteAllowed: this.props.userId === this.props.created_by,
    });
  }
}
