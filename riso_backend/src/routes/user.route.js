import express from 'express';
const userRouter = express.Router();

import userController from '../controllers/user.controller.js';

userRouter.get('/findAllUser', userController.findAllUser);
userRouter.post('/createUser', userController.createUser);
userRouter.post('/loginUser', userController.loginUser);
userRouter.patch('/updateUser/:id', userController.updateUser);
userRouter.delete("/deleteUser/:id", userController.deleteUser);

export default userRouter;