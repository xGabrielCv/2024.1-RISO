import UnitUser from "../models/UnitUser.js";

/**
 * Encontra todas as associações UnitUser para um ID de usuário específico.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<Array>} - Uma promessa que resolve para uma lista de associações UnitUser.
 */
const findAllService = () => UnitUser.find();
const createService = (params, body) => UnitUser.create(params, body);
const findByUserIdService = (userID) => UnitUser.find({ user: userID });
const findAllUsersByUnitIdService = (unitID) => UnitUser.find({ unit: unitID });
const updateService = (params, body) => UnitUser.updateOne(params, body, {new: true}); 
const deleteService = (params) => UnitUser.deleteOne(params);
const findByUserId = async (userId) => {
    try {
      // Encontra todas as associações UnitUser para o ID do usuário
      const unitUsers = await UnitUser.find({ user: userId }).populate('unit');
      return unitUsers;
    } catch (err) {
      throw new Error('Error finding UnitUser associations: ' + err.message);
    }
  };

export default {
    findByUserId,
    findAllService,
    createService,
    findByUserIdService,
    findAllUsersByUnitIdService,
    updateService,
    deleteService,
}