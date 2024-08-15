import userService from '../services/user.service.js';
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

const createUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    
    if(!name || !email || !password){
      return res.status(400).send({ message: 'Submit all fields for registration', substatus: 1 })
    }

    const user = await userService.createService({
      'name': req.body.name,
      'email': req.body.email,
      'password': bcrypt.hashSync(req.body.password, salt),
    });

    if(!user){
      return res.status(403).send({ message: 'Error creating User' });
    }
    
    return res.status(201).send({message: 'User created sucefully', user: user });
  }catch(err){
    if (err.code === 11000) {  // Código de erro para violação de chave única em MongoDB/Mongoose
      return res.status(400).send({ message: 'Email already in use', substatus: 2 });
    }
    return res.status(500).send({ message: err.message });  
  }
};

const findOne = async (req, res) => {
  try {
    const {email, password} = req.query;

    if(!email || !password){
      return res.status(400).send({ message: 'Submit all fields for login', substatus: 1})
    }
    
    const user = await userService.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found', substatus: 1});
    }

    if (user.password != bcrypt.hashSync(password, salt)) {
      return res.status(400).send({ message: 'Password or email is invalid', substatus: 2});
    }
    
    return res.status(200).send(user);
  }catch(err) {
    return res.status(500).send({ message: err.message });
  }
}

export default {createUser, findOne};