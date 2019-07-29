import {api} from '@/core';

const basepath = "/people";
export default {
    name: "peopleService",
    list: (data) => api.get(basepath, data),
    get: (id) => api.get(`${basepath}/${id}`)
};