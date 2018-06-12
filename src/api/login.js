import {get} from 'axios';
import {API_HOST, validateStatus} from './';
import {deleteApi} from './index';

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

export const apiDeleteEntity = () => new Promise((resolve, reject) => {
    deleteApi(`/me`).then(response => {
        if (response.data) {
            const entity = response.data;
            if (entity) {
                resolve(entity);
            }
        }}).catch(e => {
            reject(e)
        }
    )
});