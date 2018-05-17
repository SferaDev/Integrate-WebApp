import {post} from 'axios';
import {API_HOST} from './';


export const apiPostPasswordRecovery = (nif) =>
     new Promise((resolve, reject) => {
        post(`${API_HOST}/register/reset`, {
            nif: nif
        }).then(response => {
            if (response.data) {
                const {nif} = response.data;
                if (nif) {
                    resolve(nif);
                }
                else reject();
            }
            else reject();
        }).catch(error => {
            if (error.response.status === 404) {
                reject('User not found');
            }
        })


    });




