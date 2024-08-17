import unidadeEmpresaService from "../services/unidadeEmpresa.service.js";

const createUnidadeEmpresa = async (req, res) => {
    try {
        const {nome,numeroFuncionarios,cnpj,estado,rua,complemento,numero,code} = req.body;

        const unidadeEmpresa = await unidadeEmpresaService.createService(req.body);

        return res.status(200).send({message: 'Unity and comapany successfully created ', unidadeEmpresa:unidadeEmpresa});
    } catch (err) {
        return res.status(500).send({message: err.message});
    }
}

const findOneUnity = async (req, res) => {
    try {
        const {codeUnity} = req.body;

        if(!codeUnity) {
        return res.status(400).send({message: 'Submit all fields for search units'})
        }
        
        const unity = await unidadeEmpresaService.findOne(req.body);

        return res.status(200).send({message: 'Unity code successfully found', unidadeEmpresa:unity});
    } catch (err) {
        return res.status(500).send({message: err.message}); 
    }
}

export default {
    createUnidadeEmpresa,
    findOneUnity,
};

