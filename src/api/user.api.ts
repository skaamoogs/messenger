import HTTPTransport from "../utils/http-transport";

export interface ProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface PasswordData {
  oldPassword: string;
  newPassword: string;
}

const userAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/user"
);

export default class UserAPI {
  changeProfile(data: ProfileData) {
    return userAPIInstance.put("/profile", {
      data,
      headers: { "content-type": "application/json" },
    });
  }

  changePassword(data: PasswordData) {
    return userAPIInstance.put("/password", {
      data,
      headers: { "content-type": "application/json" },
    });
  }

  changeAvatar(data: FormData) {
    return userAPIInstance.put("/profile/avatar", { data, dataType: "formData" });
  }

  getUserById(id: string) {
    return userAPIInstance.get(`/${id}`);
  }

  searchUser(login: string) {
    return userAPIInstance.post("/search", { data: { login } });
  }
}
