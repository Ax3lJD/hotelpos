import axios from 'axios';

const CORP_API_BASE_URL = 'http://localhost:8080/api/corporations';

export const listCorporations = () => axios.get(CORP_API_BASE_URL);
export const getCorporation = (corpId) => axios.get(CORP_API_BASE_URL + '/' + corpId);
export const validateCorporateId = (corpId) => axios.get(CORP_API_BASE_URL + '/' + corpId);