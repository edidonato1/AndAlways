import api from './apiConfig';

export const getData = async () => {
  const resp = await api.get('/api/cms');
  return resp.data;
}