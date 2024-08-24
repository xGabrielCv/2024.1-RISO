import express from 'express';
import unitController from '../controllers/unit.controller.js';

const unitRouter = express.Router()

unitRouter.get('/findAllUnit', unitController.findAllUnit);
unitRouter.get('/findByCode/:code', unitController.findByCodeUnit);
unitRouter.post('/createUnit',unitController.createUnit);
unitRouter.patch('/updateUnit/:id', unitController.updateUnit);
unitRouter.delete('/deleteUnit/:id',unitController.deleteUnit);

export default unitRouter;