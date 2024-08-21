import UnidadeEmpresa from "../models/UnidadeEmpresa.js";

const createService = (body) => UnidadeEmpresa.create(body);
const editService = (id ,body) => UnidadeEmpresa.updateOne(id, body); 
const removeService = (id) => UnidadeEmpresa.deleteOne(id);

export default {
    createService,
    editService,
    removeService,
}