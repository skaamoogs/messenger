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
import readMarkImg from "../../../../images/read-mark.svg";

type MessengerProps = typeof messengerProps;

export interface IMessenger extends MessengerProps {
  messages: IMessage[];
  selectedChat: number;
  userId: number;
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

  componentDidUpdate(_oldProps: IMessenger, _newProps: IMessenger): boolean {
    this.children.messenger = this.createMessages(_newProps);

    return true;
  }

  createMessages(props: IMessenger) {
    return props.messages.map(
      (message) =>
        new Message({
          ...message,
          time: message.time.slice(11, 16),
          readMarkImage: readMarkImg,
          isMine: message.user_id === this.props.userId,
        })
    );
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
  const { messages, selectedChat, user } = state;

  if (!selectedChat) {
    return {
      messages: [],
      selectedChat,
      userId: user?.id,
    };
  }

  const messagesToChat = (messages || {})[selectedChat].filter(
    (message) => message.type === "message"
  );

  return {
    messages: messagesToChat || [],
    selectedChat,
    userId: user?.id,
  };
}

const withMessenger = withStore(mapMessengerToProps);
const Messenger = withMessenger(MessengerBase as typeof Block);

export default Messenger;
