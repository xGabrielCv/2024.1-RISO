import Unity from '../models/Unity.js';

const createService = (body) => Unity.create(body);

const findUnity = (codeUnity) => Unity.findOne(codeUnity);

export default {
    createService,
    findOne,
};