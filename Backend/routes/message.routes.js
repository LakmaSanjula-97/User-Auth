const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/message.controller");

module.exports = function () {
  router.post("/save", MessageController.saveMessage);

  return router;
};
