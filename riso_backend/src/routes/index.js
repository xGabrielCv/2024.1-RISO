import { Router } from "express";
import cors from 'cors';
import userRouter from "./user.route.js";

const router = Router();

router.use("/user", cors(), userRouter);

export default router;