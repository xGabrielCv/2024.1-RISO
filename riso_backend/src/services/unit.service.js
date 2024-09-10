import Unit from "../models/Unit.js";

/**
 * Encontra todas as associações UnitUser para um ID de usuário específico.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<Array>} - Uma promessa que resolve para uma lista de associações UnitUser.
 */

const findAllService = () => Unit.find();
const findByCode = (code) => Unit.findOne({ code });
const createService = (body) => Unit.create(body);
const updateService = (params, body) => Unit.updateOne(params, body, {new: true}); 
const deleteService = (params) => Unit.deleteOne(params);
const findByIds = async (ids) => {
    try {
      // Encontra todas as unidades cujos IDs estão na lista fornecida
      const units = await Unit.find({ _id: { $in: ids } });
      return units;
    } catch (err) {
      throw new Error('Error finding units by IDs: ' + err.message);
    }
  };

export default {
    findByIds,
    findAllService,
    findByCode,
    createService,
    updateService,
    deleteService,
}