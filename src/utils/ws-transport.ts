import EventBus from "./event-bus";

export enum WSTransportEvents {
  Connected = "connected",
  Error = "error",
  Message = "message",
  Close = "close",
}

export default class WSTransport extends EventBus {
  private _socket: WebSocket | null = null;

  private _pingInterval = 0;

  constructor(private _url: string) {
    super();
  }

  send(data: unknown) {
    if (!this._socket) {
      throw new Error("The socket is not connected");
    }
    this._socket.send(JSON.stringify(data));
  }

  connect(): Promise<void> {
    this._socket = new WebSocket(this._url);

    this._subscribe(this._socket);

    this._setupPing();

    return new Promise((resolve) => {
      this.on(WSTransportEvents.Connected, () => {
        resolve();
      });
    });
  }

  close() {
    this._socket?.close();
  }

  _setupPing() {
    this._pingInterval = setInterval(() => {
      this.send({ type: "ping" });
    }, 5000) as unknown as number;

    this.on(WSTransportEvents.Close, () => clearInterval(this._pingInterval));

    this._pingInterval = 0;
  }

  _subscribe(socket: WebSocket) {
    socket.addEventListener("open", () => {
      this.emit(WSTransportEvents.Connected);
    });
    socket.addEventListener("close", () => {
      this.emit(WSTransportEvents.Close);
    });
    socket.addEventListener("error", (event) => {
      this.emit(WSTransportEvents.Error, event);
    });
    socket.addEventListener("message", (message) => {
      const data = JSON.parse(message.data);

      if (data.type && data.type === "pong") {
        return;
      }

      this.emit(WSTransportEvents.Message, data);
    });
  }
}
