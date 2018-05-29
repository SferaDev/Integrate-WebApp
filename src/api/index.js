import axios from 'axios';
import {localStorage} from "../utils/localstorage";

export const API_HOST = process.env.REACT_APP_API_HOST || 'https://integrate-backend-staging.herokuapp.com'

const getLocalToken = () => {
    console.log('get local token', localStorage.getItem('token'))
    return localStorage.getItem('token');
};

const getHeaders = () => ({
    token: getLocalToken()
})

export const validateStatus = () => true;

export const getApi = (endpoint, options) => {
    return axios.get(`${API_HOST}${endpoint}`, {
        ...options,
        mode: 'cors',
        headers: getHeaders(),
        validateStatus
    }).catch(error => {
        console.log(error);
    });
};

export const postApi = (endpoint, data, options) => axios.post(`${API_HOST}${endpoint}`, data, {
    ...options,
    mode: 'cors',
    headers: getHeaders(),
    validateStatus,
}).catch(error => {
    console.log(error);
});

export const putApi = (endpoint, data, options) => axios.put(`${API_HOST}${endpoint}`, data, {
    ...options,
    mode: 'cors',
    headers: getHeaders(),
    validateStatus,
}).catch(error => {
    console.log(error);
});

export const deleteApi = (endpoint, options) => axios.delete(`${API_HOST}${endpoint}`, {
    ...options,
    mode: 'cors',
    headers: getHeaders(),
    validateStatus,
}).catch(error => {
    console.log(error);
});

export * from './login';