const express = require("express");
const { registerStaff, authStaff, logout } = require("../controllers/staff.controller");
const { protect, admin } = require("../middleware/authenticationMiddleware.js")

const router = express.Router();

router.route("/register").post(protect, admin, registerStaff);
router.post("/login", authStaff);
router.get("/logout", logout);
module.exports = router;
