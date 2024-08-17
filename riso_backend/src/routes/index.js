import { Router } from "express";
import cors from 'cors';
import userRouter from "./user.route.js";
import userToUnityRouter from "./userToUnity.route.js"
import unidadeEmpresaRouter from "./unidadeEmpresa..route.js";

const router = Router();

router.use("/user", cors(), userRouter);
router.use("/userToUnity", cors(), userToUnityRouter);
router.use("/unidadeEmpresa", cors(), unidadeEmpresaRouter);

export default router;