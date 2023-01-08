import Handlebars from "handlebars";
import Input from "../../../../components/input/input";
import Link from "../../../../components/link/link";
import ChatsController from "../../../../controllers/chats.controller";
import withStore from "../../../../hocs/with-store";
import Block from "../../../../modules/block";
import { IChat } from "../../../../utils/interfaces";
import Chat from "../chat/chat";
import chatListProps from "./chat-list.props";
import chatListTemplate from "./chat-list.tmpl";

type ChatListProps = typeof chatListProps;

export interface IChatList extends ChatListProps {
  chats: IChat[];
}

class ChatListBase extends Block<IChatList> {
  constructor(props: IChatList) {
    super({ ...chatListProps, ...props });
  }

  init() {
    const { profileLinkProps, searchInputProps, chats } = this.props;

    this.children.profileLink = new Link(profileLinkProps);

    this.children.searchInput = new Input(searchInputProps);

    this.children.chatList = chats.map(
      (chat) =>
        new Chat({
          ...chat,
          events: {
            click: () => ChatsController.selectChat(chat.id),
          },
        })
    );
  }

  render() {
    const template = Handlebars.compile(chatListTemplate);
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({ chats: state.chats || [] }));
const ChatList = withChats(ChatListBase as typeof Block);

export default ChatList;
