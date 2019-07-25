import api from '@/services/ApiService';

export default {
    name: "userService",
    get: (id) => api.mock.get(`/people/${id}`)
};