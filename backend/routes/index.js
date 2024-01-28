const express = require("express");

const routes = express.Router();
const userRouter = require("./user");

routes.use("/user", userRouter);

module.exports = routes;
