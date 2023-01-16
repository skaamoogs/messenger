import { IMessage } from "../utils/interfaces";
import store from "../utils/store";
import WSTransport, { WSTransportEvents } from "../utils/ws-transport";

class MessageController {
  private _sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    if (this._sockets.has(id)) {
      return;
    }

    const { user } = store.getState();

    const userId = user?.id;

    if (userId) {
      const wsTransport = new WSTransport(
        `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`
      );

      this._sockets.set(id, wsTransport);

      await wsTransport.connect();

      this._subscribe(wsTransport, id);

      this.getOldMessages(id);
    }
  }

  sendMessage(id: number, message: string) {
    const socket = this._sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      content: message,
      type: "message",
    });
  }

  getOldMessages(id: number, offset = "0") {
    const socket = this._sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      content: offset,
      type: "get old",
    });
  }

  closeAll() {
    Array.from(this._sockets.values()).forEach((socket) => socket.close());
  }

  private _onMessage(id: number, messages: IMessage | IMessage[]) {
    let messagesToAdd: IMessage[] = [];

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse();
    } else {
      messagesToAdd.push(messages);
    }

    const currentMessages = (store.getState().messages || {})[id] || [];

    store.set(`messages.${id}`, [...currentMessages, ...messagesToAdd]);
  }

  private _onClose(id: number) {
    this._sockets.delete(id);
  }

  private _subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, (message) =>
      this._onMessage(id, message)
    );
    transport.on(WSTransportEvents.Close, () => this._onClose(id));
  }
}

export default new MessageController();
