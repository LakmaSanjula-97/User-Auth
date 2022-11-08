const express = require("express");
const { registerStaff, authStaff } = require("../controllers/staff.controller");

const router = express.Router();

router.route("/register").post(registerStaff);
router.post("/login", authStaff);

module.exports = router;
