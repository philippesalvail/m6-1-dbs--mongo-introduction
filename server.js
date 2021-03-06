"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getCollection } = require("./__workshop/exercises/exercise-1.2");
const { getUsers } = require("./__workshop/exercises/exercise-1.3");
const { addUser } = require("./__workshop/exercises/exercise-1.4");
const {
  createGreeting,
  updateGreeting,
  getGreeting,
  getGreetings,
  deleteGreeting,
} = require("./__workshop/exercises/exercise-2");
// const { addUser } = require("./__workshop/exercises/exercise-1.4");

const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .get("/exercise-1/users", getUsers)
  .get("/exercise-2/:id", getGreeting)
  .post("/exercise-1/users", addUser)
  .post("/exercise-2/greeting", createGreeting)
  .get("/ex-2/greeting", getGreetings)
  .delete("/ex-2/greeting/:_id", deleteGreeting)
  .put("/ex-2/greeting/", updateGreeting)

  // exercise 1

  // exercise 2

  // handle 404s
  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
