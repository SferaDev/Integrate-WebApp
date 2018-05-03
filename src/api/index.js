import axios from 'axios';

let localStorage;

if (typeof localStorage === 'undefined' || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

export const API_HOST = 'http://integrate-backend-staging.herokuapp.com';

const redirectIfUnauthorized = (response) => {
    if (response.status === 401) {
        // TODO: redirect to login
        localStorage.clear();
    }
    return response;
};

const getLocalToken = () => localStorage.getItem('token');
const headers = {
    token: getLocalToken(),
};
const validateStatus = () => true;

export const getApi = (endpoint, options) => axios.get(`${API_HOST}${endpoint}`, {
    ...options,
    headers,
    validateStatus
}).then(redirectIfUnauthorized);

export const postApi = (endpoint, options) => axios.post(`${API_HOST}${endpoint}`, {
    ...options,
    headers,
    validateStatus,
}).then(redirectIfUnauthorized);

export const putApi = (endpoint, options) => axios.put(`${API_HOST}${endpoint}`, {
    ...options,
    headers,
    validateStatus,
}).then(redirectIfUnauthorized);

export const deleteApi = (endpoint, options) => axios.delete(`${API_HOST}${endpoint}`, {
    ...options,
    headers,
    validateStatus,
}).then(redirectIfUnauthorized);

export * from './login';