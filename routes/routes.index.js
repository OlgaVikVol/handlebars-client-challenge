const express = require("express");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

const Main = require("../views/Main");
const { TODOLIST } = require("../db/models");

const router = express.Router();

router.patch("/:id", async (req, res) => {
  // console.log(req.params.id);

  const findTodo = await TODOLIST.findOne({ where: { id: req.params.id } });
  const updatedTodo = await findTodo.update({ status: true });
  // await findPost.increment("status", { by: true });
  // console.log(updatedTodo);
  res.json(updatedTodo);
});

module.exports = router;
