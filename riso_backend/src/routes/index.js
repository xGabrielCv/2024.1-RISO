import { Router } from "express";
import cors from 'cors';
import userRouter from "./user.route.js";
import unitRouter from "./unit.route.js";
import unitUserRouter from "./unitUser.js";

const router = Router();

router.use("/user", cors(), userRouter);
router.use("/unit", cors(), unitRouter);
router.use("/unitUser", cors(), unitUserRouter);

export default router;