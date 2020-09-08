import axios from 'axios';
import md5 from 'md5';

//marvel authorization configs
const PUBLIC_KEY = '07963a49398a81c0f9280dd092ed9076';
const PRIVATE_KEY = '235296d16df5eda4f22b7fc8cf18065d41cc847d';
const timestamp = Number(new Date());
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);


const url = 'http://gateway.marvel.com/v1/public/';

const api = axios.create({
    baseURL: url,
})

api.defaults.params = {}
api.defaults.params['ts'] = timestamp;
api.defaults.params['apikey'] = PUBLIC_KEY;
api.defaults.params['hash'] = hash;

export default api;