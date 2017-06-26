const express = require("express");
const { ObjectId } = require("mongodb");

const api = express.Router();
const error = require("debug")("app:error");
const info = require("debug")("app:info");
const log = require("debug")("app:log");

module.exports = function(app, db) {
  api.use((req, res, next) => {
    info(`${req.method} ${req.url}`);
    next();
  });

  api.get("/", (req, res) => {
    db.collection("todos").find({}).toArray((err, docs) => {
      if (err) {
        error(err);
        res.error(err);
      } else {
        info("requested todos: %o", docs);
        res.json(docs);
      }
    });
  });

  api.get("/:id", (req, res) => {
    db
      .collection("todos")
      .findOne({ _id: ObjectId(req.params.id) })
      .then(doc => {
        res.json({
          status: 200,
          success: "Todo found",
          document: doc
        });
      })
      .catch(e => {
        res.json({
          status: 500,
          error: e
        });
      });
  });

  api.post("/", (req, res) => {
    const { body: { title, completed } } = req;
    db
      .collection("todos")
      .insertOne({ title: title, completed: completed })
      .then(doc => {
        res.json({
          status: 200,
          success: "Todo saved",
          document: doc
        });
      })
      .catch(e => {
        res.json({
          status: 500,
          error: e
        });
      });
  });

  api.put("/:id", (req, res) => {
    const { params: { id }, body: { title, completed } } = req;
    log(id, title, completed);
    db
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { title: title, completed: completed } },
        { returnOriginal: false }
      )
      .then(doc => {
        res.json({
          status: 200,
          success: "Todo updated",
          document: doc
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          error: "Document was not updated",
          message: err
        });
      });
  });

  api.delete("/:id", (req, res) => {
    const { params: { id } } = req;
    db
      .collection("todos")
      .findOneAndDelete({ _id: ObjectId(id) })
      .then(r => {
        res.json({
          status: 200,
          success: "Todo deleted"
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          error: err
        });
      });
  });

  app.use("/api", api);

  return app;
};
