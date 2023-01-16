/* eslint-disable no-console */
import API, { UserAPI, PasswordData, ProfileData } from "../api/user.api";
import { ROUTES } from "../const";
import { User } from "../utils/interfaces";
import router from "../utils/route/router";
import store from "../utils/store";

class UserController {
  private _api: UserAPI;

  constructor() {
    this._api = API;
  }

  async changeProfile(data: ProfileData) {
    try {
      const user = await this._api.changeProfile(data);
      store.set("user", user);
      router.go(ROUTES.profile);
    } catch (error: any) {
      if (error && error.reason) {
        console.log(error.reason);
      }
    }
  }

  async changePassword(data: PasswordData) {
    try {
      await this._api.changePassword(data);
      router.go(ROUTES.profile);
    } catch (error: any) {
      if (error && error.reason) {
        console.log(error.reason);
      }
    }
  }

  async changeAvatar(data: FormData) {
    try {
      const user = await this._api.changeAvatar(data);
      store.set("user", user);
      router.go(ROUTES.profile);
    } catch (error: any) {
      if (error && error.reason) {
        console.log(error.reason);
      }
    }
  }

  async searchUser(login: string) {
    const response = (await this._api.searchUser(login)) as User[];
    if (response) {
      return response[0];
    }
  }
}

export default new UserController();
