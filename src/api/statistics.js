import {getApi} from "./";

export const apiGetStatistics = (interval = 'Month') => getApi(`/me/salesChart`, {
    params: {
        interval
    }
}).then(response => response.data.stats);