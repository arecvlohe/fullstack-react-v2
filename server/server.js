const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const error = require("debug")("app:error");
const info = require("debug")("app:info");

const app = express();
const api = require("./api");
const init = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

init((err, db) => {
  if (err) {
    error("Failed to make db connection");
    error(err);
    process.exit(1);
  }

  info("database connected");

  api(app, db);

  app.listen(3000, () => {
    info("Listening on port 3000");
  });
});
