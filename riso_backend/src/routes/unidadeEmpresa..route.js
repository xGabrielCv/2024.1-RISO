import express from 'express';

const unidadeEmpresaRouter = express.Router()
import unidadeEmpresaController from '../controllers/unidadeEmpresa.controller.js';

unidadeEmpresaRouter.post('/createUnidadeEmpresa',unidadeEmpresaController.createUnidadeEmpresa)
export default unidadeEmpresaRouter;


