import ChatsAPI from "../api/chats.api";
import store from "../utils/store";
import MessageController from "./message.controller";

class ChatsController {
  private _api: ChatsAPI;

  constructor() {
    this._api = new ChatsAPI();
  }

  async create(title: string) {
    await this._api.create(title);

    this.getChats();
  }

  async getChats() {
    const chats = await this._api.getChats();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);
      await MessageController.connect(chat.id, token);
    });

    store.set("chats", chats);
  }

  async deleteChat(id: number) {
    await this._api.delete(id);
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
    store.set("selectedChat", id);
  }
}

export default new ChatsController();
