import Unity from '../models/Unity.js';

const createService = (body) => Unity.create(body);

const findOne = (params) => Unity.findOne(params);

export default {
    createService,
    findOne,
};