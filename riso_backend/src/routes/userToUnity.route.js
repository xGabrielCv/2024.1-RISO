import express from 'express';
const userToUnityRouter = express.Router();

import userToUnityController from '../controllers/userToUnity.controller.js';

userToUnityRouter.post('/createUser', userToUnityController.createUserToUnity);
userToUnityRouter.get('/findUser', userToUnityController.findUserAndUnity);

export default userToUnityRouter;