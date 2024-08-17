import mongoose from 'mongoose';

const UnidadeEmpresaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  numeroFuncionarios: {
    type: Number,
    required: true
    },
  cnpj: {
    type: Number,  // mudar no front (somente nmumeros)
    required: true,
    unique: true,
  },
  estado: {
    type: String,
    required: true
    },
   rua: {
    type: String,
    required: true
    },
  complemento: {
    type: String,
    required: true
    },
  numero: {
    type: Number,
    require: false
  },
  code: {
    type: String,
    require: false,
    unique: true,
  }
});

const UnidadeEmpresa = mongoose.model('UnidadeEmpresa', UnidadeEmpresaSchema);
export default UnidadeEmpresa;