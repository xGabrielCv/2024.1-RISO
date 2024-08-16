import userToUnityService from '../services/userToUnity.service.js';
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

const createUserToUnity = async (req, res) => {
  try {
    const {unityId, email} = req.body;
    
    if(!unityId || !email){
      return res.status(400).send({ message: 'Submit all fields for registration' })
    }

    const userToUnity = await userToUnityService.createService({
      'unityId': bcrypt.hashSync(req.body.unityId, salt),
      'email': req.body.email,
    });

    if(!userToUnity){
      return res.status(400).send({local: 'On req', message: 'Error creating UserToUniy' });
    }
    
    return res.status(200).send({message: 'UserToUnity created sucefully', user: user });
  }catch(err){
    return res.status(500).send({ message: err.message });  
  }
};

const findUserAndUnity = async (req, res) => {
  try {
    const {unityId, email} = req.query;

    if(!unityId || !email){
      return res.status(400).send({ message: 'Submit all fields for login' })
    }
    
    const userAndUnity = await userToUnityService.findUserAndUnity({ unityId, email });
    if (!userAndUnity) {
      return res.status(404).send({ local: 'on req', message: 'User or Unity not found'});
    }

    if (userAndUnity.unityId != bcrypt.hashSync(unityId, salt)) {
      return res.status(400).send({ local: 'on req', message: 'Unity code is invalid'})
    }
    
    return res.status(200).send(user);
  }catch(err) {
    return res.status(500).send({ local: 'On req', message: err.message });
  }
}

export default {createUserToUnity, findUserAndUnity};