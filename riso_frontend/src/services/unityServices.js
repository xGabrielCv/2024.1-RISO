import axios from 'axios';

const baseURL = 'http://localhost:3000';

export function linkUser(unityIdData, emailData) {
    const body = {
        id: unityIdData,
        email: emailData,
    };

   const response = axios.post(`${baseURL}/unity/linkUser`, body);

   return response;
};

export function findOne(unityId){
  const response = axios.get(`${baseURL}/unity/findUnity`, { params: { unityId }});
  return response;
};