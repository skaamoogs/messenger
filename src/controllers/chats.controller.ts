import API, { ChatsAPI } from "../api/chats.api";
import { ROUTES } from "../const";
import router from "../utils/route/router";
import store from "../utils/store";
import MessageController from "./message.controller";

class ChatsController {
  private _api: ChatsAPI;

  constructor() {
    this._api = API;
  }

  async create(title: string) {
    await this._api.create(title);

    this.getChats();

    router.go(ROUTES.chat);
  }

  async getChats() {
    const chats = await this._api.getChats();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);
      await MessageController.connect(chat.id, token);
      chat.users = await this._api.getUsers(chat.id);
    });

    store.set("chats", chats);
  }

  async deleteChat(id: number) {
    await this._api.delete(id);

    this.getChats();
  }

  async getUsers(id: number) {
    if (!id) {
      return;
    }
    const users = await this._api.getUsers(id);

    return users;
  }

  addUser(id: number, userId: number) {
    this._api.addUsers(id, [userId]);
  }

  deleteUser(id: number, userId: number) {
    this._api.deleteUsers(id, [userId]);
  }

  async getToken(id: number) {
    const response = (await this._api.getToken(id)) as { token: string };

    return response.token;
  }

  selectChat(id: number) {
    const { chats } = store.getState();
    const selectedChat = chats?.find((chat) => chat.id === id);

    store.set("selectedChat", selectedChat);
  }

  async changeAvatar(data: FormData) {
    try {
      await this._api.changeVatar(data);
      this.getChats();
      router.go(ROUTES.chat);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.reason);
    }
  }
}

export default new ChatsController();
