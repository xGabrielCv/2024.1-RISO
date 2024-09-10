import mongoose from 'mongoose';

const UnitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numberOfficials: {
    type: Number,
    required: true
    },
  cnpj: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true
    },
   street: {
    type: String,
    required: true
    },
  complement: {
    type: String,
    required: true
    },
  number: {
    type: Number,
    required: false
  },
  code: {
    type: String,
    required: true,
    unique: true,
  }
}, {timestamps:true});

const Unit = mongoose.model('Unit', UnitSchema);
export default Unit;