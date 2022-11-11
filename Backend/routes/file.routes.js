const express = require("express");
const router = express.Router();
const { protect, manager } = require("../middleware/authenticationMiddleware.js")
const {uploadFile}  = require("../controllers/file.controller");

module.exports = function () {
  //router.post("/upload", FileController.uploadFile);
  router.route("/upload").post(protect, manager, uploadFile);

  return router;
};
