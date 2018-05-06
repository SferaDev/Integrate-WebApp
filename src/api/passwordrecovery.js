import {post} from 'axios';
import {API_HOST} from './';


export const apiPostPasswordRecovery = (nif) =>
    new Promise((resolve, reject) => {
        post(`${API_HOST}/register/reset`, nif).then(response => {
            if (response.status === 404) {
                reject('User not found');
            }
            console.log(response)
        })
            .catch(error => {
                console.log(error.response)
            })
    })

