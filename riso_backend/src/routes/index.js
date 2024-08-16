import { Router } from "express";
import cors from 'cors';
import userRouter from "./user.route.js";
import unityRouter from "./unity.route.js"

const router = Router();

router.use("/user", cors(), userRouter);
router.use("/unity", cors(), unityRouter);
router.use();
export default router;