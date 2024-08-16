import User from '../models/User.js'
import Unity from '../models/Unity.js'
import UserToUnity from '../models/UserToUnity.js';

const createService = (body) => UserToUnity.create(body);

const findUserAndUnity = (unityId, email) => { 
    { Unity.findOne({ unityId }), User.findOne({ email }) };
};

export default {
    createService,
    findUserAndUnity,
};