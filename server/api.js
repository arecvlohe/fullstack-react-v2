const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "GET all todos" });
});

router.post("/", (req, res) => {
  res.send({ message: "POST new todos" });
});

router.put("/:id", (req, res) => {
  res.send({ message: "PUT (update) todo" });
});

router.delete("/:id", (req, res) => {
  res.send({ message: "DELETE todo" });
});

module.exports = router;
