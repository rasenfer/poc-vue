import {api} from '@/core';

export default {
    name: "userService",
    get: (id) => api.get(`/people/${id}`)
};