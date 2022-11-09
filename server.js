const express = require("express");
const path = require('path');

const ROUTES = {
  chat: "/",
  login: "/login",
  signIn: "/signin",
  profile: "/profile",
  password: "/profile/password",
  data: "/profile/data",
  page404: "/404",
  page500: "/500",
};

const app = express();
const PORT = 3000;

for (let route in ROUTES) {
  app.use(ROUTES[route], express.static(path.join(__dirname, "/dist")));
}
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  });