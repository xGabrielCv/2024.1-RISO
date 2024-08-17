import UnidadeEmpresa from "../models/UnidadeEmpresa.js";

const createService = (body) => UnidadeEmpresa.create(body);

const findOne = (body) => UnidadeEmpresa.findOne(body);

export default {
    createService,
    findOne,
}