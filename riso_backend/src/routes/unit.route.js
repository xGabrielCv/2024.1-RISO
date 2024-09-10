import express from 'express';
import unitController from '../controllers/unit.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const unitRouter = express.Router()

unitRouter.get('/findAllUnit', authMiddleware, unitController.findAllUnit);
unitRouter.get('/findByCode/:code', authMiddleware, unitController.findByCodeUnit);
unitRouter.post('/createUnit', authMiddleware,unitController.createUnit);
unitRouter.patch('/updateUnit/:id', authMiddleware, unitController.updateUnit);
unitRouter.delete('/deleteUnit/:id', authMiddleware, unitController.deleteUnit);

export default unitRouter;