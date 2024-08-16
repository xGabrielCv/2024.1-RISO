import mongoose from 'mongoose';

const UserToUnitySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    unityId: {
        type: String,
        required: true,
        unique: true,
    },
});

const UserToUnity = mongoose.model('UserToUnity', UserToUnitySchema);

export default UserToUnity;