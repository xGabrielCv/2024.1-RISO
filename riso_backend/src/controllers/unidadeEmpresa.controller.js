import unidadeEmpresaService from "../services/unidadeEmpresa.service.js";

const createUnidadeEmpresa = async (req, res) => {
    try{
        const {nome,numeroFuncionarios,cnpj,estado,rua,complemento,numero} = req.body

        const unidadeEmpresa = await unidadeEmpresaService.createService(req.body)

        return res.status(200).send({message: 'Unity and comapany successfully created ', unidadeEmpresa:unidadeEmpresa})
    }catch (err){

        return res.status(500).send({message: err.message}) // completar erro 404 
    
    }

} 

export default {createUnidadeEmpresa};

