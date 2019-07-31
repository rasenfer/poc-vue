import {api} from '@/core';

const basepath = "/characters";
export default {
    list: (data) => api.get(basepath, data),
    get: (id) => api.get(`${basepath}/${id}`)
};