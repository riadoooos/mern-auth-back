import express from "express";
import { signin, signup } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/");
userRouter.post("/sign-up", signup);
userRouter.post("/sign-in", signin);

export default userRouter;
