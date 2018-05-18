import {post} from 'axios';
import {API_HOST} from './';
export const apiPostSignUp = (entity) => new Promise((resolve, reject) => {
    post(`${API_HOST}/register`, entity).then(response => {
        console.log(response)
    }).catch(error => {
        if (error.response.status === 409) {
            reject('Nif already exist.');
        }
    });
});

