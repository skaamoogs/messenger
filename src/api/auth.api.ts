import HTTPTransport from "../utils/http-transport";

export interface SignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginData {
  login: string;
  password: string;
}

const authAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/auth"
);

export class AuthAPI {
  login(data: LoginData) {
    return authAPIInstance.post("/signin", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  signUp(data: SignUpData) {
    return authAPIInstance.post("/signup", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  getUser() {
    return authAPIInstance.get("/user");
  }

  logout() {
    return authAPIInstance.post("/logout");
  }
}

export default new AuthAPI();
