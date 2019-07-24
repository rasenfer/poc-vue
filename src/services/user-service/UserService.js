import axios from 'axios';

export default {
    name: "userService",
    getUser: () => axios
        .get(`${localApi}/users/1`)
};