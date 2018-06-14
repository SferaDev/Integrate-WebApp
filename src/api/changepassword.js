import {putApi} from './index';


export const apiPutChangePassword = (oldPassword,newPassword) => new Promise((resolve, reject) => {
    return putApi(`/me/password/`, {
        oldPassword: oldPassword,
        newPassword: newPassword
    }).then(response => {
        if (response && response.data)
            resolve(response.data);
    }).catch(e => {
        reject(e)
    })
});


//resize:none;
//overflow: auto;