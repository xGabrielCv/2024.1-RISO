import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';

const userRouter = express.Router();

import userController from '../controllers/user.controller.js';

userRouter.get('/findAllUser', authMiddleware, userController.findAllUser);
userRouter.post('/createUser', userController.createUser);
userRouter.post('/loginUser', userController.loginUser);
userRouter.patch('/updateUser/:id', authMiddleware, userController.updateUser);
userRouter.delete("/deleteUser/:id", authMiddleware, userController.deleteUser);

export default userRouter;