import Handlebars from "handlebars";
import Avatar, { AvatarProps } from "../../../../components/avatar/avatar";
import Block from "../../../../modules/block";
import chatTemplate from "./chat.tmpl";

export interface ChatProps {
  avatarProps: AvatarProps;
  author: string;
  time: string;
  text: string;
  unreadCount: number;
}

export default class Chat extends Block<ChatProps> {
  init() {
    const { avatarProps } = this.props;
    this.children.avatar = new Avatar(avatarProps);
  }

  render() {
    const template = Handlebars.compile(chatTemplate);
    return this.compile(template, this.props);
  }
}
