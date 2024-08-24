import unitUserService from "../services/unitUser.service.js";

const findAllUnitUser = async (req, res) => {
    try{
      const unitUser = await unitUserService.findAllService();
  
      if (unitUser.length === 0) {
        return res.status(200).send({message: 'Any UnitUser was created'});
      }
  
      return res.status(201).send({message: 'All units and users relationship was returned', unitUser });
    }catch(err) {
      return res.status(500).send({ message: err.message });  
    }
}

const createUnitUser = async (req, res) => {
    try {
        const {
            user,
            unit,
            master_adm,
        } = req.body;

        if (!user || !unit || !master_adm) {
            return res.status(400).send({ message: 'Submit all fields for userUnit', substatus: 1});
        };

        const unitUser = await unitUserService.createService(req.body);

        return res.status(200).send({message: 'Unity and company successfully created ', unitUser});
    } catch (err) {
        if (err.code === 11000) {  // Código de erro para violação de chave única em MongoDB/Mongoose
            return res.status(400).send({ message: 'Match User and Unit already registrated', substatus: 2 });
        }

        return res.status(500).send({message: err.message});
    }
}

const findByUserIdUnitUser = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).send({ message: 'User ID is required' });
    }
    
    const unitUser = await unitUserService.findByUserIdService(userId);
    if (!unitUser || unitUser.length === 0) {
      return res.status(404).send({ message: 'This user doesn\'t have any unit associations' });
    }
    
    return res.status(200).send({ message: 'UserUnit found', unitUser });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const findAllUsersByUnitIdUserUnit = async (req, res) => {
  try {
    const { unitId } = req.params;

    if (!unitId) {
      return res.status(400).send({ message: 'Unit ID is required' });
    }

    const users = await unitUserService.findAllUsersByUnitIdService(unitId);

    if (!users || users.length === 0) {
      return res.status(404).send({ message: 'No users found for this unit' });
    }

    return res.status(200).send({ message: 'Users found', users });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const updateUnitUser = async (req, res) => {
  try{
    const { id } = req.params;

    if(!id) {
      return res.status(404).send({ message: 'User ID is required' });
    }

    const unitUser = await unitUserService.updateService({_id: id}, req.body);

    if (!unitUser) {
      return res.status(404).send({ message: 'This unit and user relationship does not exist' });
    }

    return res.status(200).send({ message: 'This unit and user relationship were updated', unitUser });
  }catch(err) {
    return res.status(500).send({ message: err.message });
  }
}

const deleteUnitUser = async (req,res) => {
    try{
        const {id} = req.params;
    
        if (!id) {
          return res.status(404).send({message: 'UnitUser ID is required'});
        }
    
        const unitUser = await unitUserService.deleteService({ _id: id});
    
        if (!unit) {
          return res.status(404).send({ message: 'This unitUser does not exist' });
        }
    
        return res.status(200).send({ message: 'UnitUser was deleted successfully', unitUser });
      }catch(err){
        return res.status(500).send({ message: err.message });
      }  
}

export default {
  findAllUnitUser,
  createUnitUser,
  findByUserIdUnitUser,
  findAllUsersByUnitIdUserUnit,
  updateUnitUser,
  deleteUnitUser,
};