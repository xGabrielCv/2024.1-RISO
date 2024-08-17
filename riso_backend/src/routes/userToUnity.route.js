import express from 'express';
const userToUnityRouter = express.Router();

import userToUnityController from '../controllers/userToUnity.controller.js';

userToUnityRouter.post('/createUserToUnity', userToUnityController.createUserToUnity);
userToUnityRouter.get('/findUserAndUnity', userToUnityController.findUserAndUnity);

export default userToUnityRouter;