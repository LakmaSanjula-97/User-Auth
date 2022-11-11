const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authenticationMiddleware")
const { saveMessage } = require("../controllers/message.controller");


router.route("/save").post(protect, saveMessage);

module.exports = router;
