import express from 'express';
import unitUserController from '../controllers/unitUser.controller.js';

const unitUserRouter = express.Router()

unitUserRouter.get('/findAllUnitUser', unitUserController.findAllUnitUser);
unitUserRouter.post('/createUnitUser',unitUserController.createUnitUser);
unitUserRouter.post('/createRelationByUnitCode', unitUserController.createRelationByUnitCode);
unitUserRouter.get('/findByUserId/:UserId', unitUserController.findByUserIdUnitUser);
unitUserRouter.get('/findAllUsersByUnitId/:UnitId', unitUserController.findAllUsersByUnitIdUserUnit);
unitUserRouter.patch('/updateUnitUser/:id', unitUserController.updateUnitUser);
unitUserRouter.delete('/deleteUnitUser/:id',unitUserController.deleteUnitUser);

export default unitUserRouter;