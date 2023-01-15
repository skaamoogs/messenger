export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  role?: string;
}

export interface IMessage {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export interface IChat {
  id: number;
  title: string;
  created_by: number;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  } | null;
}

export interface IChatExntended extends IChat {
  users: User[];
}

export interface State {
  user?: User;
  messages?: Record<number, IMessage[]>;
  selectedChat?: IChatExntended;
  chats?: IChatExntended[];
}
