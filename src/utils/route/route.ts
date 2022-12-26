import Block from "../../modules/block";
import { isEqual, render } from "../helpers";
import { Indexed } from "../types";

export interface BlockClass<P = any> {
  new (props: P): Block;
}

export default class Route {
  _pathname: string;

  _blockClass: BlockClass;

  _block: Block | null = null;

  _props: Record<string, any>;

  constructor(pathname: string, view: BlockClass, props: Indexed) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    this._block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  getPathname() {
    return this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      render(this._props.rootQuery, this._block);
    }
  }
}
