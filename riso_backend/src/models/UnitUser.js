import mongoose from 'mongoose';

const UnitUserSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unit',
        required: true
    }
}, {timestamps: true});

// Garantir que um usuário não possa estar na mesma unidade mais de uma vez
UnitUserSchema.index({ user: 1, unit: 1 }, { unique: true });

const UnitUser = mongoose.model('UnitUser', UnitUserSchema);
export default UnitUser;