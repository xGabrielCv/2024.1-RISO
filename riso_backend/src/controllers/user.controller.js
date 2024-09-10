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

const findAllUser = async (req, res) => {
  try{
    const user = await userService.findAllService();

    if (user.length === 0) {
      return res.status(200).send({message: 'Any user was created'});
    }

    return res.status(201).send({ message: 'Users were found', user });
  }catch(err) {
    return res.status(500).send({ message: err.message });  
  }
};

const createUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    
    if(!name || !email || !password){
      return res.status(400).send({ message: 'Submit all fields for registration', substatus: 1 })
    }

     // Verificação do formato do email
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
       return res.status(400).send({ message: 'Invalid email format', substatus: 3 });
     }

    const user = await userService.createService({
      name,
      email,
      'password': bcrypt.hashSync(req.body.password, salt),
    });

    if(!user){
      return res.status(403).send({ message: 'Error creating User' });
    }

    const token = userService.generateToken(user.id);
    
    return res.status(201).send({message: 'User created sucefully', token });
  }catch(err){
    if (err.code === 11000) {  // Código de erro para violação de chave única em MongoDB/Mongoose
      return res.status(400).send({ message: 'Email already in use', substatus: 2 });
    }
    return res.status(500).send({ message: err.message });  
  }
};

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    if(!email || !password){
      return res.status(400).send({ message: 'Submit all fields for login', substatus: 1})
    }
    
    const user = await userService.findOneService({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found', substatus: 1});
    }

    if (user.password != bcrypt.hashSync(password, salt)) {
      return res.status(400).send({ message: 'Password or email is invalid', substatus: 2});
    }
    
    const token = userService.generateToken(user.id);
    
    return res.status(200).send({ message: 'User was found it', token });
  }catch(err) {
    return res.status(500).send({ message: err.message });
  }
}

const updateUser = async (req, res) => {
  try{
    const {id} = req.params;

    if(!id) {
      return res.status(404).send({ message: 'User ID is required' });
    }

    const user = await userService.updateService({_id: id}, req.body);

    if (!user) {
      return res.status(404).send({ message: 'This user does not exist' });
    }

    return res.status(200).send({ message: 'This user was updated', user });
  }catch(err) {
    return res.status(500).send({ message: err.message });
  }
}

const deleteUser = async (req, res) => {
  try{
    const {id} = req.params;

    if (!id) {
      return res.status(404).send({message: 'User ID is required'});
    }

    const user = await userService.deleteService({ _id: id});

    if (!user) {
      return res.status(404).send({ message: 'This user does not exist' });
    }

    return res.status(200).send({ message: 'This user was deleted successfully', user });
  }catch(err){
    return res.status(500).send({ message: err.message });
  }
}

export default {
  findAllUser, 
  createUser, 
  loginUser,
  updateUser,
  deleteUser,
};