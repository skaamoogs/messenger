import UserAPI, { PasswordData, ProfileData } from "../api/user.api";
import { ROUTES } from "../const";
import router from "../utils/route/router";
import store from "../utils/store";

class UserController {
  private _api: UserAPI;

  constructor() {
    this._api = new UserAPI();
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
      console.log("go to profile page");
      const user = await this._api.changeAvatar(data);
      store.set("user", user);
      router.go(ROUTES.profile);
    } catch (error: any) {
      if (error && error.reason) {
        console.log(error.reason);
      }
    }
  }
}

export default new UserController();
