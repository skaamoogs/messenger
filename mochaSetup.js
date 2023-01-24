/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { JSDOM } = require("jsdom");

const { window } = new JSDOM('<div class=".root"></div>', {
  url: "http://localhost:3000",
});

global.window = window;
global.document = window.document;

require.extensions[".scss"] = function _() {
  module.exports = () => ({});
};
