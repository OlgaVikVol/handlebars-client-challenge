const express = require("express");

require("@babel/register");
require("dotenv").config();

const morgan = require("morgan");

const { TODOLIST } = require("./db/models");
const path = require("path");

const indexRouter = require("./routes/routes.index");

const renderTemplate = require("./lib/renderTemplate");
const Main = require("./views/Main");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/")));

app.use("/", indexRouter);

app.get("/", async (req, res) => {
  try {
    const todos = await TODOLIST.findAll();
    const plainTodos = todos.map((item) => item.get({ plain: true }));
    console.log("plainTodos ", plainTodos);
    renderTemplate(Main, { plainTodos }, res);
  } catch (error) {
    console.log("error -----> ", error);
  }
});

app.listen(process.env.PORT, () =>
  console.log("Server listen port:", process.env.PORT)
);
