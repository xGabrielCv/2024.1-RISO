import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://localhost:3000';

export function createUnit(nameData, numberOfficialsData, cnpjData, stateData, streetData, complementData, numberData){
  const body = {
      name: nameData,
      numberOfficials: numberOfficialsData,
      cnpj: cnpjData,
      state: stateData,
      street: streetData,
      complement: complementData,
  };

  if (numberData) body.number = numberData;

  const response = axios.post(
    `${baseURL}/unit/createUnit`,
    body,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );

  return response;
};

export function updateUnit (id ,nameData, numberOfficialsData, cnpjData, stateData, streetData, complementData, numberData){
  const body = {}

  if (nameData) body.name = nameData;
  if (numberOfficialsData) body.numberOfficials = numberOfficialsData;
  if (cnpjData) body.cnpj = cnpjData;
  if (stateData) body.state = stateData;
  if (streetData) body.street = streetData;
  if (complementData) body.complement = complementData;
  if (numberData) body.number = numberData;

  const response = axios.patch(`${baseURL}/unit/updateUnit/${id}`, body);
  return response;
};

export function deleteUnit (id){
  const response = axios.delete(`${baseURL}/unit/deleteUnit/${id}`);
  return response;
}