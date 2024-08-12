import express from 'express';
const userRouter = express.Router();

import userController from '../controllers/user.controller.js';

userRouter.post('/createUser', userController.createUser);
userRouter.get('/findUser', userController.findOne);

export default userRouter;