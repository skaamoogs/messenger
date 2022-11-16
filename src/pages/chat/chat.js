import Handlebars from "handlebars";
import { chatData } from "./chat.data";
import { chatTemplate } from "./chat.tmpl";

Handlebars.registerHelper("times", function (n, block) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += block.fn(i)
  }
  return result;
});

const template = Handlebars.compile(chatTemplate);
export const chatContent = template(chatData);
