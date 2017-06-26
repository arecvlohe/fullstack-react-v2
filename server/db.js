const { MongoClient } = require("mongodb");
require("dotenv").config();

const URI =
  "mongodb://" +
  process.env.USERNAME +
  ":" +
  process.env.PASSWORD +
  "@ds139262.mlab.com:39262/fullstack-react-v2";

module.exports = function(cb) {
  MongoClient.connect(URI, cb);
};
