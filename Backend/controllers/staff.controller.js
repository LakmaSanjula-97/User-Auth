const asyncHandler = require("express-async-handler");
const Staff = require("../models/Staff.Model");
const generateToken = require("../config/generateToken");

const registerStaff = asyncHandler(async (req, res) => {
  const { name, email, password, pic, role } = req.body;

  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await Staff.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Staff member already exists");
  }

  const user = await Staff.create({
    name,
    email,
    password,
    pic,
    role
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // isAdmin: user.isAdmin,
      pic: user.pic,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Staff member not found");
  }
});

const authStaff = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const user = await Staff.findOne({ email });

  if (
    user &&
    (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      //   isAdmin: user.isAdmin,
      pic: user.pic,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = {
  registerStaff,
  authStaff,
};
