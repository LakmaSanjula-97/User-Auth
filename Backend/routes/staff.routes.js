const express = require("express");
const { registerStaff, authStaff, logout } = require("../controllers/staff.controller");

const router = express.Router();

router.route("/register").post(registerStaff);
router.post("/login", authStaff);
router.get("/logout", logout);

module.exports = router;
