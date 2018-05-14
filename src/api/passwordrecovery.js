import {post} from 'axios';
import {API_HOST} from './';


export const apiPostPasswordRecovery = (nif) =>
     new Promise((resolve, reject) => {
        post(`${API_HOST}/register/reset`, {
            nif: nif
        }).then(response => {
            const nif = response.data;
            if (nif) {
                resolve(nif);
            }
            else reject();
            console.log(response)
        }).catch(() => reject())

    });




