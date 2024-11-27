import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const registerCtrl = asyncHandler(async (req, res) => {
  const user = User.create(req.body);
  res.json({
    status: "success",
    message: "newUser created successfully",
    user,
  });
});

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
