import axios from '@/axios.js'

export default {
    login(params) {
        return axios.post('/passport/login', params);
    }
}