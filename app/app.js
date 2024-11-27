import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import morgan from "morgan";
import dbConnect from "../config/dbConnect.js";
import { globalErrhandler, notFound } from "../middlewares/globalErrhandler.js";
import userRouter from "../routes/userRoute.js";

//db connect
dbConnect();

const app = express();

app.use(cors());

//pass incoming data
app.use(express.json());

//routes
//Home route

//use morgan
app.use(morgan("tiny"));

//routes
//Home route

app.use("/api/v1/users/", userRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

export default app;
