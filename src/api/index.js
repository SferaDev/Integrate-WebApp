import axios from 'axios';

const API_HOST = 'http://integrate-backend-staging.herokuapp.com';

export const apiPostLogin = ({id, password}) => new Promise((resolve, reject) => {
    axios.get(`${API_HOST}/login`, {
        params: {
            nif: id,
            password,
        }
    })
        .then(function (response) {
            resolve();
        })
        .catch(function (error) {
            reject();
        });
});