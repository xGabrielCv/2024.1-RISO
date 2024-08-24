import UnitUser from "../models/UnitUser.js";

const findAllService = () => UnitUser.find();
const createService = (params, body) => UnitUser.create(params, body);
const findByUserIdService = (body) => UnitUser.find(body);
const deleteService = (params) => UnitUser.deleteOne(params);

export default {
    findAllService,
    createService,
    findByUserIdService,
    deleteService,
}