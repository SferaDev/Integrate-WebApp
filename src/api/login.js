import {get} from 'axios';
import {API_HOST} from './';

export const apiPostLogin = ({id, password}) =>
    new Promise((resolve, reject) => {
        get(`${API_HOST}/login`, {
            params: {
                nif: id,
                password,
            }
        }).then(response  => {
            if (response.data) {
                const {token} = response.data;
                if (token) {
                    localStorage.setItem('token', token);
                    resolve();
                } else
                    reject();
            }
            else
                reject();
        }).catch(() => reject());
    });