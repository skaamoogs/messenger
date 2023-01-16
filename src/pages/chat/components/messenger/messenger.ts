import Handlebars from "handlebars";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import MessageController from "../../../../controllers/message.controller";
import withStore from "../../../../hocs/with-store";
import Block from "../../../../modules/block";
import { IChatExntended, IMessage, State } from "../../../../utils/interfaces";
import { inputValidator } from "../../../../utils/validate";
import Message from "../message/message";
import messengerTemplate from "./messenger.tmpl";
import readMarkImg from "../../../../images/read-mark.svg";
import { getTimeForMessenger } from "../../../../utils/helpers";
import SendMessage from "../send-message/send-message";
import sendMessageProps from "../send-message/send-message.props";

export interface IMessenger {
  messages: IMessage[];
  selectedChat: IChatExntended;
  userId: number;
}

class MessengerBase extends Block<IMessenger> {
  init() {
    this.children.sendMessage = new SendMessage(sendMessageProps);

    this.children.messenger = this.createMessages(this.props);
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
          time: getTimeForMessenger(message.time).time,
          readMarkImage: readMarkImg,
          isMine: message.user_id === this.props.userId,
        })
    );
  }

  componentDidMount(): boolean {
    return true;
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

  const messagesToChat = (messages || {})[selectedChat.id].filter(
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
