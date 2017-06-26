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
    db.collection("todos").find({}).toArray((err, todos) => {
      if (err) {
        error(err);
        res.error(err);
      } else {
        info("requested todos: %o", todos);
        res.json({
          status: 200,
          success: "Todos found",
          todos: todos
        });
      }
    });
  });

  api.get("/:id", (req, res) => {
    db
      .collection("todos")
      .findOne({ _id: ObjectId(req.params.id) })
      .then(todo => {
        info("Requested todo: %o", todo);
        res.json({
          status: 200,
          success: "Todo found",
          todo: todo
        });
      })
      .catch(err => {
        error(err);
        res.error(err);
      });
  });

  api.post("/", (req, res) => {
    const { body: { title, completed } } = req;
    db
      .collection("todos")
      .insertOne({ title: title, completed: completed })
      .then(todo => {
        info("Added todo %o", todo);
        res.json({
          status: 200,
          success: "Todo saved",
          todo: todo
        });
      })
      .catch(err => {
        error(err);
        res.error(err);
      });
  });

  api.put("/:id", (req, res) => {
    const { params: { id }, body: { title, completed } } = req;
    db
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { title: title, completed: completed } },
        { returnOriginal: false }
      )
      .then(todo => {
        info("Updated todo %o", todo);
        res.json({
          status: 200,
          success: "Todo updated",
          todo: todo
        });
      })
      .catch(err => {
        error(err);
        res.error(err);
      });
  });

  api.delete("/:id", (req, res) => {
    const { params: { id } } = req;
    db
      .collection("todos")
      .findOneAndDelete({ _id: ObjectId(id) })
      .then(todo => {
        info("Deleted todo %o", todo);
        res.json({
          status: 200,
          success: "Todo deleted",
          todo: todo
        });
      })
      .catch(err => {
        error(err);
        res.error(err);
      });
  });

  app.use("/api", api);

  return app;
};
