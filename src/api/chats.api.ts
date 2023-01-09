import HTTPTransport from "../utils/http-transport";
import { IChat } from "../utils/interfaces";

const chatsAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/chats"
);

export class ChatsAPI {
  getChats() {
    return chatsAPIInstance.get("/") as Promise<IChat[]>;
  }

  create(title: string) {
    return chatsAPIInstance.post("/", { data: { title } });
  }

  delete(id: number) {
    return chatsAPIInstance.delete("/", { data: { chatsId: id } });
  }

  getUsers(id: number) {
    return chatsAPIInstance.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]) {
    return chatsAPIInstance.put("/users", { data: { users, chatId: id } });
  }

  deleteUsers(id: number, users: number[]) {
    return chatsAPIInstance.delete("/users", { data: { users, chatId: id } });
  }

  getToken(id: number) {
    return chatsAPIInstance.post(`/token/${id}`);
  }
}

export default new ChatsAPI();
