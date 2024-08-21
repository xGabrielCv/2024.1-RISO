import unidadeEmpresaService from "../services/unidadeEmpresa.service.js";

const createUnidadeEmpresa = async (req, res) => {
    try{
        const {nome,numeroFuncionarios,cnpj,estado,rua,complemento,numero} = req.body

        const unidadeEmpresa = await unidadeEmpresaService.createService(req.body)

        return res.status(200).send({message: 'Unity and company successfully created ', unidadeEmpresa:unidadeEmpresa})
    }catch (err){

        return res.status(500).send({message: err.message})
    
    }

} 

const editUnidadeEmpresa = async (req, res) => {
    try{
        const {cnpj} = req.body

        const unidadeEmpresa = await unidadeEmpresaService.editService({cnpj}, req.body);

        if (unidadeEmpresa.matchedCount === 0) {
            return res.status(404).send({ message: 'UnidadeEmpresa not found' });
        }

        if (unidadeEmpresa.modifiedCount === 0) {
            return res.status(200).send({ message: 'No changes were made to the database' });
        }

        return res.status(200).send({message: 'Unity successfully updated ', unidadeEmpresa:unidadeEmpresa})
    }catch (err){
        
        return res.status(500).send({message: err.message}) 
    
    }
}

const removeUnidadeEmpresa = async (req,res) => {
    try{
        const {cnpj} = req.body;

        const unidadeEmpresa = await unidadeEmpresaService.removeService({cnpj});
    
        return res.status(200).send({message: 'Unity successfully removed ', unidadeEmpresa:unidadeEmpresa});
    }catch (err){
        
        return res.status(500).send({message: err.message});
    }   
}

export default {
    createUnidadeEmpresa,
    editUnidadeEmpresa,
    removeUnidadeEmpresa,
};