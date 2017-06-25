const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", api);

app.listen(3000, () => {
  console.log(`App listening on port %d`, 3000);
});
