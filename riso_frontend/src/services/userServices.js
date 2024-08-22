import axios from 'axios';

const baseURL = 'http://localhost:3000';

export function createUser(nameData, emailData, passwordData) {
  const body = {
      name: nameData,
      email: emailData,
      password: passwordData,
  };

  const response = axios.post(`${baseURL}/user/createUser`, body);

  return response;
};

export function loginUser (email, password){
  const body = {
    email: email,
    password: password,
  }

  const response = axios.post(`${baseURL}/user/loginUser`, body);
  return response;
};