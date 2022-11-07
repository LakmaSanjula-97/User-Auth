const express = require("express");
const { registerStaff, authStaff } = require("../controllers/staff.controller");
// const {
//   registerUser,
//   authUser,
//   allUsers,
// } = require("../controllers/userControllers");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/register").post(registerStaff);
router.post("/login", authStaff);

module.exports = router;
