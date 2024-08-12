import User from '../models/User.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findOne = (params) => User.findOne(params);

export default {
    createService,
    findAllService,
    findOne,
};