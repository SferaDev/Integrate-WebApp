import {deleteApi, getApi, postApi, putApi} from './index';

export const apiGetListAllGoods = () => new Promise((resolve, reject) => {
    getApi(`/me/goods`).then(response => {
        if (response.data) {
            const goodsList = response.data;
            if (goodsList) {
                resolve(goodsList);
            }
    }}).catch(e => {
        reject(e)
    })
});

export const apiAddNewGood = (good) => new Promise((resolve, reject) => {
    postApi(`/me/goods`, good).then(response => {
        if (response.data) {
            const good = response.data;
            if (good) {
                resolve(good);
            }
    }}).catch(e => {
        reject(e)
    })
});

export const apiUpdateExistingGood = (good) => new Promise((resolve, reject) => {
    putApi(`/me/goods/${good._id}`, {...good, _id: undefined}).then(response => {
        if (response.data) {
            const good = response.data;
            if (good) {
                resolve(good);
            }
    }}).catch(e => {
        reject(e)
    })
});

export const apiDeleteExistingGood = (good) => new Promise((resolve, reject) => {
    deleteApi(`/me/goods/${good._id}`, {...good, _id: undefined}).then(response => {
        if (response.data) {
            const good = response.data;
            if (good) {
                resolve(good);
            }
    }}).catch(e => {
        reject(e)
    })
});