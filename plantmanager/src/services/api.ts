import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/https://github.com/phBirais/Planty_',
    //baseURL: 'http://192.168.18.19:3333',
});


export default api;