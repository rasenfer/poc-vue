import axios from 'axios';

const basepath = '/characters';
export default {
    list: (data) => axios.get(basepath, data),
    get: (id) => axios.get(`${basepath}/${id}`)
};