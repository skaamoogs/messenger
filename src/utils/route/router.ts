import { Indexed } from "../types";
import Route, { BlockClass } from "./route";

export class Router {
  routes: Route[];

  history: History;

  _currentRoute: Route | null;

  _rootQuery: string;

  // eslint-disable-next-line no-use-before-define
  static __instance: Router;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: BlockClass, props?: Indexed) {
    const route = new Route(pathname, block, {
      ...props,
      rootQuery: this._rootQuery,
    });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: Event) => {
      const target = event.currentTarget as Window;
      this._onRoute(target.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.navigate(pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }

  getCurrentPathname() {
    return this._currentRoute?.getPathname();
  }
}

export default new Router(".root");
