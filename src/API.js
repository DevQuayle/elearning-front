import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4000'
});



API.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers['authorization'] = token;
    return config;
}, function (error) {
    return Promise.reject(error);
});



axios.interceptors.response.use(function (response) {
    if (response.data.errors){
        const code = response.data.errors[0].extensions.code;
        if (code == 407) {
            localStorage.removeItem('token');
        }
    }
    
    if(response.headers['_token']){
        localStorage.setItem('token',response.headers['_token']);
    }

    return response;
}, function (error) {
    return Promise.reject(error);
});


export default API;
