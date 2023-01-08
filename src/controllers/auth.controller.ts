/* eslint-disable no-console */
import AuthAPI, { LoginData, SignUpData } from "../api/auth.api";
import { ROUTES } from "../const";
import router from "../utils/route/router";
import store from "../utils/store";
import { Indexed } from "../utils/types";

class AuthController {
  private _api: AuthAPI;

  constructor() {
    this._api = new AuthAPI();
  }

  async login(data: LoginData) {
    try {
      await this._api.login(data);
      await this.getUser();
      router.go(ROUTES.chat);
    } catch (error: any) {
      if (error && error.reason) {
        console.log(error.reason);
      }
    }
  }

  async signUp(data: SignUpData) {
    try {
      await this._api.signUp(data);
      await this.getUser();
      console.log("signup success");
      router.go(ROUTES.chat);
    } catch (error: any) {
      if (error && error.reason) {
        console.log(error.reason);
      }
    }
  }

  async getUser() {
    const user = (await this._api.getUser()) as Indexed;
    if (!user.display_name) {
      user.display_name = "не задано";
    }
    store.set("user", user);
    console.log("got user successful");
  }

  async logout() {
    try {
      await this._api.logout();
      router.go(ROUTES.login);
    } catch (error: any) {
      if (error && error.reason) {
        console.log(error.reason);
      }
    }
  }
}

export default new AuthController();
