function isEqual(lhs, rhs) {
  return lhs === rhs;
}

function render(query, block) {
  const root = document.querySelector(query);
  root.textContent = block.getContent();
  return root;
}

export default class Route {
  _pathname: string;

  _blockClass: any;

  _block: any;

  _props: Record<string, any>;

  constructor(pathname: string, view: any, props: Record<string, any>) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
