import Handlebars from "handlebars";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import MessageController from "../../../../controllers/message.controller";
import withStore from "../../../../hocs/with-store";
import Block from "../../../../modules/block";
import { IChatExntended } from "../../../../utils/interfaces";
import { Events } from "../../../../utils/types";
import { inputValidator } from "../../../../utils/validate";
import sendMessageProps from "./send-message.props";
import sendMessageTemplate from "./send-message.tmpl";

type SendMessageProps = typeof sendMessageProps;

export interface ISendMessage extends SendMessageProps {
  selectedChat: IChatExntended;
  events: Events;
}

class SendMessageBase extends Block<ISendMessage> {
  constructor(props: ISendMessage) {
    super({
      ...props,
      events: {
        submit: (event) => this.sendMessage(event),
      },
    });
  }

  init() {
    const { messageInputProps, sendMessageButtonProps } = this.props;

    this.children.messageInput = new Input({
      ...messageInputProps,
    });

    this.children.sendMessageButton = new Button({
      ...sendMessageButtonProps,
    });
  }

  sendMessage(event: Event) {
    event.preventDefault();
    const input = this.children.messageInput as Input;
    const test = inputValidator(input.getName(), input.getValue());
    const { selectedChat } = this.props;
    if (test && selectedChat) {
      MessageController.sendMessage(selectedChat.id, input.getValue());
      input.setValue("");
      // ChatsController.getChats();
    }
  }

  render() {
    const template = Handlebars.compile(sendMessageTemplate);
    return this.compile(template, this.props);
  }
}

const withSelectedChat = withStore((state) => ({
  selectedChat: state.selectedChat,
}));
const SendMessage = withSelectedChat(SendMessageBase as typeof Block);

export default SendMessage;
