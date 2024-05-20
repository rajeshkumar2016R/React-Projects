const express = require("express");

const userController = require("../Controller/users");
const Router = express.Router();


Router
  .post("/users", userController.createusers)
  .get("/users", userController.getAllusers)
  .get("/users/:id", userController.getusers)
  .put("/users/:id", userController.replaceusers)
  .patch("/users/:id", userController.updateusers)
  .delete("/users/:id", userController.deleteusers);

exports.Router = Router;