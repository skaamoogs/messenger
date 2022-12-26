import EventBus from "./event-bus";
import { Indexed } from "./types";
import { set } from "./helpers";

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private _state: Indexed = {};

  getState() {
    return this._state;
  }

  set(path: string, value: unknown) {
    set(this._state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
