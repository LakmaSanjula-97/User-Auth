const express = require("express");
const router = express.Router();
const FileController = require("../controllers/file.controller");

module.exports = function () {
  router.post("/upload", FileController.uploadFile);

  return router;
};
