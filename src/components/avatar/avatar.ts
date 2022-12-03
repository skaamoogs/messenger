import Handlebars from "handlebars";
import Block from "../../modules/block";
import { Events } from "../../utils/type";
import avatarTemplate from "./avatar.tmpl";

export interface AvatarProps {
  className?: string;
  imageClassName?: string;
  maskClassName?: string;
  src: string;
  alt?: string;
  changeAvatarText?: string;
  events?: Events;
}

export default class Avatar extends Block<AvatarProps> {
  render() {
    const template = Handlebars.compile(avatarTemplate);
    return this.compile(template, this.props);
  }
}
