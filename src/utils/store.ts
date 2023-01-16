import EventBus from "./event-bus";
import { set } from "./helpers";
import { State } from "./interfaces";

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private _state: State = {};

  getState() {
    return this._state;
  }

  set(path: string, value: unknown) {
    set(this._state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
