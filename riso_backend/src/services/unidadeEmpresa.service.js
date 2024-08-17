import UnidadeEmpresa from "../models/UnidadeEmpresa.js";

const createService = (body) => UnidadeEmpresa.create(body);
export default{
    createService,

}