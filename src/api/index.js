import axios from 'axios';

let localStorage = window && window.localStorage ? window.localStorage : null;

if (typeof localStorage === 'undefined' || localStorage === null) {
    localStorage = {
        getItem: () => 'fake localStorage',
        setItem: (key, value) => {},
        clear: () => {}
    }
}


export const API_HOST = process.env.REACT_APP_API_HOST || 'https://integrate-backend-staging.herokuapp.com'

const redirectIfUnauthorized = (response) => {
    console.log('redirectIfUnauthorized', response);
    /*
    if (response.status === 401) {
        // TODO: redirect to login
        localStorage.clear();
    }
    */
    return response;
};

const getLocalToken = () => {
    return localStorage.getItem('token');
};

const headers = {
    token: getLocalToken()
};

export const validateStatus = () => true;

export const getApi = (endpoint, options) => {
    return axios.get(`${API_HOST}${endpoint}`, {
        ...options,
        mode: 'cors',
        headers,
        validateStatus
    }).then(redirectIfUnauthorized).catch(function (error) {
        console.log(error);
    });
};

export const postApi = (endpoint, data, options) => axios.post(`${API_HOST}${endpoint}`, data, {
    ...options,
    mode: 'cors',
    headers,
    validateStatus,
}).then(redirectIfUnauthorized).catch(function (error) {
    console.log(error);
});

export const putApi = (endpoint, data, options) => axios.put(`${API_HOST}${endpoint}`, data, {
    ...options,
    mode: 'cors',
    headers,
    validateStatus,
}).then(redirectIfUnauthorized).catch(function (error) {
    console.log(error);
});

export const deleteApi = (endpoint, options) => axios.delete(`${API_HOST}${endpoint}`, {
    ...options,
    mode: 'cors',
    headers,
    validateStatus,
}).then(redirectIfUnauthorized).catch(function (error) {
    console.log(error);
});

export * from './login';