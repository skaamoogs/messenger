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
    return chatsAPIInstance.post("/", {
      data: { title },
      headers: {
        "content-type": "application/json",
      },
    });
  }

  delete(id: number) {
    return chatsAPIInstance.delete("/", {
      data: { chatId: id },
      headers: {
        "content-type": "application/json",
      },
    });
  }

  getUsers(id: number) {
    return chatsAPIInstance.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]) {
    return chatsAPIInstance.put("/users", {
      data: { users, chatId: id },
      headers: {
        "content-type": "application/json",
      },
    });
  }

  deleteUsers(id: number, users: number[]) {
    return chatsAPIInstance.delete("/users", {
      data: { users, chatId: id },
      headers: {
        "content-type": "application/json",
      },
    });
  }

  getToken(id: number) {
    return chatsAPIInstance.post(`/token/${id}`);
  }
}

export default new ChatsAPI();
