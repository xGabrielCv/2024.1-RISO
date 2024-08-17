import axios from 'axios';

const baseURL = 'http://localhost:3000';

export function createUserToUnity(unityIdData, emailData) {
  const body = {
      unityId: unityIdData,
      email: emailData,
  };

  const response = axios.post(`${baseURL}/userToUnity/createUserToUnity`, body);

  return response;
};

export function findOne(unityId, email){
  const response = axios.get(`${baseURL}/userToUnity/findUserAndUnity`, { params: { unityId, email }});
  return response;
};