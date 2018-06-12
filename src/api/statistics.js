import {getApi} from "./";

export const apiGetStatistics = (interval) => getApi(`/me/salesChart`, {
    params: {
        interval
    }
}).then(response => response.data.stats)
    .catch(e => {
        console.log(e)
    });