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

const findByCodeUnit = async (req, res) => {
    try {
        const { code } = req.params;
        const unit = await unitService.findByCode(code);
        if (!unit) {
            return res.status(404).send({ message: 'Unit not found' });
        }
        return res.status(200).send(unit);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

const createUnit = async (req, res) => {
    try{
        const {
            name,
            numberOfficials,
            cnpj,
            state,
            street,
            complement,
        } = req.body;

        if (!name || !numberOfficials || !cnpj || !state || !street || !complement) {
            return res.status(400).send({ message: 'Submit all fields for unit', substatus: 1});
        };

        // Função para gerar um código aleatório de 5 dígitos alfanuméricos
        const generateCode = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        };

        // Função para gerar um código único, garantindo que ele não se repita
        const generateUniqueCode = async () => {
            let unique = false;
            let newCode;
            while (!unique) {
                newCode = generateCode();
                const existingUnit = await unitService.findByCode(newCode);
                if (!existingUnit) {
                    unique = true;
                }
            }
            return newCode;
        };

        // Se o código não for passado no body, geramos um automaticamente
        const generatedCode = await generateUniqueCode();

        const unitData = {
            ...req.body,
            code: generatedCode
        };

        const unit = await unitService.createService(unitData);

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
    findByCodeUnit,
    createUnit,
    updateUnit,
    deleteUnit,
};