import axios from 'axios'
import md5 from 'js-md5';

const url = `http://gateway.marvel.com/v1/public/`;
const api = axios.create({
    baseURL: url,
})

export default api;