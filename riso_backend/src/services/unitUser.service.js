import UnitUser from "../models/UnitUser.js";

const findAllService = () => UnitUser.find();
const createService = (params, body) => UnitUser.create(params, body);
const findByUserIdService = (userID) => UnitUser.find({ user: userID });
const findAllUsersByUnitIdService = (unitID) => UnitUser.find({ unit: unitID });
const deleteService = (params) => UnitUser.deleteOne(params);

export default {
    findAllService,
    createService,
    findByUserIdService,
    findAllUsersByUnitIdService,
    deleteService,
}