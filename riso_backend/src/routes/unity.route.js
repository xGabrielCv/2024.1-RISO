import express from 'express';
const unityRouter = express.Router();

import unityController from '../controllers/unity.controller.js';

unityRouter.post('/createUnity', unityController.createUnity);
unityRouter.get('/findUnity', unityController.findOne);

export default unityRouter;