import Handlebars from "handlebars";
import Block from "../../../../modules/block";
import { IMessage } from "../../../../utils/interfaces";
import messageTemplate from "./message.tmpl";

export default class Message extends Block<IMessage> {
  render() {
    const template = Handlebars.compile(messageTemplate);
    return this.compile(template, this.props);
  }
}
