import axios from 'axios';

const serverUrl = 'http://localhost:4000/api';

const API = {
    getName: function() {
        return axios.get(`${serverUrl}/users`);
    },
    getEvents: function() {
        return axios.get(`${serverUrl}/events`);
    }
}

export default API;