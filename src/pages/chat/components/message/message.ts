import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import { IMessage } from "../../../../utils/interfaces";
import messageTemplate from "./message.tmpl";
import { ifConditionHelper } from "../../../../utils/handlebars";

ifConditionHelper();

export interface IMessageProps extends IMessage {
  isMine: boolean;
  readMarkImage: string;
}

export default class Message extends Block<IMessageProps> {
  render() {
    const template = Handlebars.compile(messageTemplate);
    return this.compile(template, this.props);
  }
}
