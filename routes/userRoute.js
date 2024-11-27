import express from "express";
import {
  getUsersCtrl,
  loginCtrl,
  registerCtrl,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUsersCtrl);
userRouter.post("/register", registerCtrl);
userRouter.post("/login", loginCtrl);

export default userRouter;
