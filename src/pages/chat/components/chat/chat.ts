import Handlebars from "handlebars";
import Avatar from "../../../../components/avatar/avatar";
import Block from "../../../../modules/block";
import chatTemplate from "./chat.tmpl";

export default class Chat extends Block {
  init() {
    const { avatarProps } = this.props;
    this.children.avatar = new Avatar(avatarProps);
  }

  render() {
    const template = Handlebars.compile(chatTemplate);
    return this.compile(template, this.props);
  }
}
