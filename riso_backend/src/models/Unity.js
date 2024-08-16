import mongoose from 'mongoose';

const UnitySchema = new mongoose.Schema({
    unityId: {
        type: String,
        required: true,
        unique: true,
    },
});

const Unity = mongoose.model('Unity', UnitySchema);

export default Unity;