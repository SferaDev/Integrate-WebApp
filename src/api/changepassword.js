import {putApi} from './index';


export const apiPutChangePassword = (oldPassword,newPassword) => new Promise((resolve, reject) => {
    putApi(`/me/password/`, {
        oldPassword: oldPassword,
        newPassword: newPassword
    }).then(response => {
        if (response.data) {
            const data = response.data;
            if (data) {
                resolve(data);
            } else reject();
        } else reject();
    })
});


//resize:none;
//overflow: auto;