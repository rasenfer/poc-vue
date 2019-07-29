import {api} from '@/core';

const basepath = "/people";
export default {
    name: "peopleService",
    list: () => api.get(basepath),
    get: (id) => api.get(`${basepath}/${id}`)
};