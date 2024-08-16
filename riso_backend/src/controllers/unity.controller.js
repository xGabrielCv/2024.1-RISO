import userService from '../services/unity.service.js';
import bcrypt from 'bcrypt';

// =====================================================
// DEFINIÇÃO DE CRIPTOGRAFIA:
var salt = '$2b$10$oGNYbTMTWMhrxSxxiKWu8.';
// ==================================================================

// ================================
// DICIONÁRIO DE ERROS:

// 202 - Aceito;
// 204 - Aceito, contudo sem necessidade de reposta;
// 403 - Erro por quebra de servidor;
// 404 - Erro por não existência de dado;
// 412 - Pré-Requisitos de requisição ausente.

// ================================

const createUnity = async (req, res) => {
  try {
    const {unityId} = req.body;
    
    if(!unityId){
      return res.status(400).send({ message: 'Submit all fields for registration' })
    }

    const unity = await unityService.createService({
      'unityId': bcrypt.hashSync(req.body.unityId, salt),
    });

    if(!unity){
      return res.status(400).send({local: 'On req', message: 'Error creating Unity' });
    }
    
    return res.status(200).send({message: 'Unity created sucefully', unity: unity });
  }catch(err){
    return res.status(500).send({ message: err.message });  
  }
};

const findOne = async (req, res) => {
  try {
    const {unityId} = req.query;

    if(!unityId){
      return res.status(400).send({ message: 'Submit all fields for login' })
    }
    
    const unity = await userService.findOne({ unityId });
    if (!unity) {
      return res.status(404).send({ local: 'on req', message: 'Unity not found'});
    }

    if (unity.unityId != bcrypt.hashSync(unityId, salt)) {
      return res.status(400).send({ local: 'on req', message: 'Unity code is invalid'})
    }
    
    return res.status(200).send(user);
  }catch(err) {
    return res.status(500).send({ local: 'On req', message: err.message });
  }
}

export default {createUnity, findOne};