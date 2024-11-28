import express from "express";
import { signup } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/");
userRouter.post("/sign-up", signup);
userRouter.post("/login");

export default userRouter;
