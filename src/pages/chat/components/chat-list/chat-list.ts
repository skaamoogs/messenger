import Handlebars from "handlebars";
import Button from "../../../../components/button/button";
import ChatsController from "../../../../controllers/chats.controller";
import withStore from "../../../../hocs/with-store";
import Block from "../../../../modules/block";
import { getTimeForChat } from "../../../../utils/helpers";
import { IChatExntended } from "../../../../utils/interfaces";
import { Events } from "../../../../utils/types";
import Chat from "../chat/chat";
import chatListProps from "./chat-list.props";
import chatListTemplate from "./chat-list.tmpl";

type ChatListProps = typeof chatListProps;

export interface IChatList extends ChatListProps {
  userId: number;
  login: string;
  selectedChatId: number;
  filteredChats: IChatExntended[];
  isLoaded: boolean;
  events?: Events;
}

class ChatListBase extends Block<IChatList> {
  constructor(props: IChatList) {
    super({ ...props });
  }

  init() {
    const { addButtonProps } = this.props;

    this.children.addButton = new Button({
      ...addButtonProps,
    });

    this.children.chatList = this.createChats(this.props);
  }

  componentDidUpdate(_oldProps: IChatList, _newProps: IChatList): boolean {
    this.children.chatList = this.createChats(_newProps);
    return true;
  }

  createChats(props: IChatList) {
    const { userId, selectedChatId, login } = this.props;
    return props.filteredChats.map((chat) => {
      const time = getTimeForChat(chat.last_message?.time || "") || "";
      return new Chat({
        ...chat,
        userId,
        login,
        selectedChatId,
        last_message: chat.last_message ? { ...chat.last_message, time } : null,
        events: {
          click: () => {
            if (chat.id !== selectedChatId) {
              ChatsController.selectChat(chat.id);
            }
          },
        },
      });
    });
  }

  render() {
    const template = Handlebars.compile(chatListTemplate);
    return this.compile(template, this.props);
  }
}

const withUserAndSelectedChat = withStore((state) => ({
  userId: state.user?.id,
  login: state.user?.login,
  selectedChatId: state.selectedChat?.id,
}));
const ChatList = withUserAndSelectedChat(ChatListBase as typeof Block);

export default ChatList;
