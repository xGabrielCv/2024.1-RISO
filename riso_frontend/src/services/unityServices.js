import axios from 'axios';

const baseURL = 'http://localhost:3000';

export function createUnity(unityIdData) {
    const body = {
        unityId: unityIdData,
    };

   const response = axios.post(`${baseURL}/unity/linkUser`, body);

   return response;
};

export function findOne(unityId){
  const response = axios.get(`${baseURL}/unity/findUnity`, { params: { unityId }});
  return response;
};