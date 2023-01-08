import Handlebars from "handlebars";
import Avatar from "../../../../components/avatar/avatar";
import { resourceURL } from "../../../../const";
import withStore from "../../../../hocs/with-store";
import Block from "../../../../modules/block";
import { IChat } from "../../../../utils/interfaces";
import { Events } from "../../../../utils/types";
import chatTemplate from "./chat.tmpl";

interface ChatProps extends IChat {
  selected: boolean;
  selectedChat: number | undefined;
  events?: Events;
}

class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super({
      ...props,
    });
  }

  init() {
    const avatar = this.props.last_message?.user.avatar;
    this.children.avatar = new Avatar({
      className: "chat-avatar-container",
      imageClassName: "avatar author-avatar",
      src: avatar ? `${resourceURL}${avatar}` : "",
      alt: "avatar",
    });
  }

  getId() {
    return this.props.id;
  }

  render() {
    const template = Handlebars.compile(chatTemplate);
    return this.compile(template, {
      ...this.props,
      selected: this.props.id === this.props.selectedChat,
    });
  }
}

const withChat = withStore((state) => ({
  selectedChat: state.selectedChat,
}));
const Chat = withChat(ChatBase as typeof Block);

export default Chat;
