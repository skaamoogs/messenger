import Handlebars from "handlebars";

const registerHelperTimes = () => {
  Handlebars.registerHelper("times", (n: number, block) => {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += block.fn(i);
    }
    return result;
  });
};

export default registerHelperTimes;
