import express from 'express';
import unidadeEmpresaController from '../controllers/unidadeEmpresa.controller.js';

const unidadeEmpresaRouter = express.Router()

unidadeEmpresaRouter.post('/createUnidadeEmpresa',unidadeEmpresaController.createUnidadeEmpresa);
unidadeEmpresaRouter.patch('/editUnidadeEmpresa', unidadeEmpresaController.editUnidadeEmpresa);
unidadeEmpresaRouter.delete('/deleteUnidadedEmpresa',unidadeEmpresaController.removeUnidadeEmpresa);


export default unidadeEmpresaRouter;