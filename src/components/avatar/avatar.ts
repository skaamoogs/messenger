import Handlebars from "handlebars";
import Block from "../../modules/block";
import avatarTemplate from "./avatar.tmpl";

export interface AvatarProps {
  className?: string;
  imageClassName?: string;
  maskClassName?: string;
  src: string;
  alt?: string;
  changeAvatarText?: string;
  events: {
    click: () => void;
  }
}

export default class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({ ...props });
  }

  render() {
    const template = Handlebars.compile(avatarTemplate);
    return this.compile(template, this.props);
  }
}
