import mongoose from 'mongoose';

const FacialSchema = new mongoose.Schema({
  numberOfSmiles: {
    type: Number,
    required: true,
  },

}, {timestamps:true});

const Unit = mongoose.model('Unit', UnitSchema);
export default Unit;