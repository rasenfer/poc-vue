import {api} from '@/core';

const basepath = "/people";
export default {
    list: (data) => api.get(basepath, data),
    get: (id) => api.get(`${basepath}/${id}`)
};