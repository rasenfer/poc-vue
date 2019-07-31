import {api} from '@/core/api';

const basepath = "/characters";
export default {
    list: (data) => api.get(basepath, data),
    get: (id) => api.get(`${basepath}/${id}`)
};