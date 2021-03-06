import {getApi} from "./index";


export const apiGetIncentives = () => new Promise((resolve, reject) => {
    getApi(`/me/stats`).then(response => {
        if (response.data) {
            const incentives = response.data;
            if (incentives) {
                resolve(incentives);
            }
    }}).catch(e => reject(e));
});