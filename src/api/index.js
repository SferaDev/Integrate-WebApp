import axios from 'axios';

let localStorage = window && window.localStorage ? window.localStorage : null;

if (typeof localStorage === 'undefined' || localStorage === null) {
    localStorage = {
        getItem: () => 'fake localStorage',
        setItem: (key, value) => {
        },
        clear: () => {
        },
    }
}


export const API_HOST = process.env.REACT_APP_API_HOST || 'https://integrate-backend-staging.herokuapp.com'

const redirectIfUnauthorized = (response) => {
    if (response.status === 401) {
        // TODO: redirect to login
        console.log('401!');
        localStorage.clear();
    }
    return response;
};

const getLocalToken = () => {
    return localStorage.getItem('token')
};

const headers = {
    token: getLocalToken(),
};

export const validateStatus = () => true;

export const getApi = (endpoint, options) => axios.get(`${API_HOST}${endpoint}`, {
    ...options,
    headers,
    validateStatus
}).then(redirectIfUnauthorized);

export const postApi = (endpoint, data, options) => axios.post(`${API_HOST}${endpoint}`, data, {
    ...options,
    headers,
    validateStatus,
}).then(redirectIfUnauthorized);

export const putApi = (endpoint, data, options) => axios.put(`${API_HOST}${endpoint}`, data, {
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