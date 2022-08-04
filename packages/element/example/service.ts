import { post, get } from './http';

export const getDetails = async () => {
  return get('/api/getInfo');
};

export const saveFunc = async () => {
  return post('/api/save');
};
export const getTreeData = async () => {
  return get('/api/tree');
};
export const getSelectData = async () => {
  return post('/api/select');
};
