import unitService from "../services/unit.service.js";

const findAllUnit = async (req, res) => {
    try{
      const unit = await unitService.findAllService();
  
      if (unit.length === 0) {
        return res.status(200).send({message: 'Any user was created'});
      }
  
      return res.status(201).send({ unit: unit });
    }catch(err) {
      return res.status(500).send({ message: err.message });  
    }
}

const createUnit = async (req, res) => {
    try{
        const {
            name,
            numberOfficials,
            cnpj,
            state,
            street,
            complement
        } = req.body;

        if (!name || !numberOfficials || !cnpj || !state || !street || !complement) {
            return res.status(400).send({ message: 'Submit all fields for unit', substatus: 1});
        };

        const unit = await unitService.createService(req.body);

        return res.status(200).send({message: 'Unity and company successfully created ', unit:unit});
    }catch (err){
        if (err.code === 11000) {  // Código de erro para violação de chave única em MongoDB/Mongoose
            return res.status(400).send({ message: 'CNPJ already in use', substatus: 2 });
        }

        return res.status(500).send({message: err.message});
    }
}

const updateUnit = async (req, res) => {
    try{
        const {id} = req.params;

        if(!id) {
            return res.status(404).send({message: 'Unit ID is required'});
        }

        const unit = await unitService.updateService({_id: id}, req.body);

        if (!unit) {
            return res.status(404).send({ message: 'Unit not found' });
        }

        return res.status(200).send({message: 'Unit successfully updated ', unit:unit});
    }catch (err){
        return res.status(500).send({message: err.message});
    }
}

const deleteUnit = async (req,res) => {
    try{
        const {id} = req.params;
    
        if (!id) {
          return res.status(404).send({message: 'Unit ID is required'});
        }
    
        const unit = await unitService.deleteService({ _id: id});
    
        if (!unit) {
          return res.status(404).send({ message: 'This unit does not exist' });
        }
    
        return res.status(200).send({ message: 'Unit was deleted successfully', unit });
      }catch(err){
        return res.status(500).send({ message: err.message });
      }  
}

export default {
    findAllUnit,
    createUnit,
    updateUnit,
    deleteUnit,
};