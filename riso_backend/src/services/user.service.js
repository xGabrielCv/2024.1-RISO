import User from '../models/User.js';


const findAllService = () => User.find();
const createService = (body) => User.create(body);
const findOneService = (body) => User.findOne(body);
const updateService = (params, body) => User.findOneAndUpdate(params, body, {new: true});
const deleteService = (params) => User.findOneAndDelete(params)

export default {
    createService,
    findOneService,
    findAllService,
    updateService,
    deleteService,
};