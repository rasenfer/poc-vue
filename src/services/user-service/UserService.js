import api from '@/services/ApiService';

export default {
    name: "userService",
    get: (id) => api.get(`/people/${id}`)
};