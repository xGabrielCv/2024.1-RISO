import axios from "axios";
import Cookies from 'js-cookie';

const baseURL = 'http://localhost:3000';

export function createRelationByUnitCode(code){
  const body = {
    code: code,
  }

  const response = axios.post(
    `${baseURL}/unitUser/createRelationByUnitCode`,
    body,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );

  return response;
}