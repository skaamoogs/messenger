const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
let port = process.env.PORT || PORT;
const rootDirectory = path.join(__dirname, "/dist");

app.use(express.static(rootDirectory));
app.use((req, res) => res.sendFile(`${rootDirectory}/index.html`));

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
