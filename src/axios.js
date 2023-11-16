import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/',
});

instance.interceptors.request.use((config) => {
    return config;
}, (err) => Promise.reject(error));

instance.interceptors.response.use((response) => {
    console.log(response);
    if (response.data.status === 'success') {
        return response.data.data;
    } else {
        return Promise.reject(response.data.msg);
    };
}, (err) => Promise.reject(error));

export default instance;