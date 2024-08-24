import axios from 'axios';

const baseURL = 'http://localhost:3000';

export function findOne (code) {
    const response = axios.get(`${baseURL}/unidadeEmpresa/findOneUnity`, { params: { code }});

    return response;
}