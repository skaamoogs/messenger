import Handlebars from "handlebars";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import MessageController from "../../../../controllers/message.controller";
import withStore from "../../../../hocs/with-store";
import Block from "../../../../modules/block";
import { IMessage, State } from "../../../../utils/interfaces";
import { inputValidator } from "../../../../utils/validate";
import Message from "../message/message";
import messengerProps from "./messenger.props";
import messengerTemplate from "./messenger.tmpl";

type MessengerProps = typeof messengerProps;

export interface IMessenger extends MessengerProps {
  messages: IMessage[];
  selectedChat: number;
}

class MessengerBase extends Block<IMessenger> {
  constructor(props: IMessenger) {
    super({ ...props });
  }

  init() {
    const { messageInputProps, sendMessageButtonProps } = this.props;

    this.children.messenger = this.createMessages(this.props);

    this.children.messageInput = new Input({
      ...messageInputProps,
    });

    this.children.sendMessageButton = new Button({
      ...sendMessageButtonProps,
      events: {
        click: () => this.sendMessage(),
      },
    });
  }

  createMessages(props: IMessenger) {
    console.log(props.messages, props.selectedChat);
    return props.messages.map((message) => {
      console.log(message);
      return new Message(message);
    });
  }

  sendMessage() {
    const input = this.children.messageInput as Input;
    const test = inputValidator(input.getName(), input.getValue());
    const { selectedChat } = this.props;
    if (test && selectedChat) {
      MessageController.sendMessage(selectedChat, input.getValue());
      input.setValue("");
    }
  }

  render() {
    const template = Handlebars.compile(messengerTemplate);
    return this.compile(template, this.props);
  }
}

function mapMessengerToProps(state: State) {
  const { messages, selectedChat } = state;

  if (!selectedChat) {
    return {
      messages: [],
      selectedChat,
    };
  }

  return {
    messages: (messages || {})[selectedChat] || [],
    selectedChat,
  };
}

const withMessenger = withStore(mapMessengerToProps);
const Messenger = withMessenger(MessengerBase as typeof Block);

export default Messenger;
