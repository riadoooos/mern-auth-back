import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import asyncHandler from "express-async-handler";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const loginCtrl = asyncHandler(async (req, res) => {
  const { userId, password } = req.body;
  const user = await User.findOne({ userId, password });
  if (!user) {
    //throw new Error("login failed!!!");
    res.json({
      status: "failed",
      message: "login failed!!",
    });
  }
  res.json({
    status: "success",
    message: "user login successfully",
    user,
  });
});

export const getUsersCtrl = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json({
    status: "success",
    message: "get users successfully",
    users,
  });
});
