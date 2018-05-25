import {get} from 'axios';
import {API_HOST, validateStatus} from './';

export const apiPostLogin = ({id, password}) => new Promise((resolve, reject) => {
    get(`${API_HOST}/login`, {
        params: {
            nif: id,
            password,
        },
        validateStatus
    }).then(response => {
        if (response.status === 401)
            reject('Invalid password');
        else if (response.data) {
            const {token, user} = response.data;
            if (token) {
                resolve({token, user});
            } else reject();
        } else reject();
    }).catch(() => reject());
});