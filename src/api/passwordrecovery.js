import {post} from 'axios';
import {API_HOST} from './';


export const apiPostPasswordRecovery = (email) =>
    new Promise((resolve, reject) => {
        post(`${API_HOST}/register/reset`, email).then(response => {
            if (response.status === 404) {
                reject('Invalid email');
            }
            console.log(response)
        })
            .catch(error => {
                console.log(error.response)
            })
    })

