import axios from 'axios';

export default {
    name: "userService",
    getUser: () => axios.get(`${mockApi}/users/1`)
};