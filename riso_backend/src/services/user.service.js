import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const findAllService = () => User.find();
const createService = (body) => User.create(body);
const findOneService = (body) => User.findOne(body);
const updateService = (params, body) => User.findOneAndUpdate(params, body, {new: true});
const deleteService = (params) => User.findOneAndDelete(params)
const generateToken = (id) => jwt.sign({_id: id}, process.env.SECRET_JWT, {expiresIn: 86400});

export default {
    createService,
    findOneService,
    findAllService,
    updateService,
    deleteService,
    generateToken,
};