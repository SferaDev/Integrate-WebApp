import {getApi} from "./";

export const apiGetStatistics = (interval, good = null) => getApi(`/me/salesChart`, {
    params: {
        interval,
        good: good !== '' ? good : undefined,
    }
}).then(response => response.data.stats)
    .catch(e => {
        console.log(e)
    });