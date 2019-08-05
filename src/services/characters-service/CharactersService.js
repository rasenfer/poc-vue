import axios from 'axios';

const basepath = '/characters';
export default {
  list: (params) => axios.get(basepath, params),
  get: (id) => axios.get(`${basepath}/${id}`)
};
