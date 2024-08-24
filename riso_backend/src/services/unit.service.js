import Unit from "../models/Unit.js";

const findAllService = () => Unit.find();
const findByCode = (code) => Unit.findOne({ code });
const createService = (body) => Unit.create(body);
const updateService = (params, body) => Unit.updateOne(params, body, {new: true}); 
const deleteService = (params) => Unit.deleteOne(params);

export default {
    findAllService,
    findByCode,
    createService,
    updateService,
    deleteService,
}