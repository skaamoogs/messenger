import Handlebars from "handlebars";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Link from "../../components/link/link";
import registerHelperTimes from "../../helpers/handlebars";
import Block from "../../modules/block";
import chatPageProps from "./chat-page.props";
import chatPageTemplate from "./chat-page.tmpl";
import Chat from "./components/chat/chat";

registerHelperTimes();

export default class ChatPage extends Block {
  constructor() {
    super(chatPageProps);
  }

  init() {
    const {
      chatProps,
      profileLinkProps,
      searchInputProps,
      userAvatarProps,
      messageInputProps,
      sendMessageButtonProps,
    } = this.props;

    this.children.profileLink = new Link(profileLinkProps);

    this.children.searchInput = new Input(searchInputProps);

    this.children.chat = new Chat(chatProps);

    this.children.userAvatar = new Avatar(userAvatarProps);

    this.children.messageInput = new Input({ ...messageInputProps });

    this.children.sendMessageButton = new Button(sendMessageButtonProps);
  }

  render() {
    const template = Handlebars.compile(chatPageTemplate);
    return this.compile(template, this.props);
  }
}
