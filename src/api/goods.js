import { getApi} from './index';

export const apiGetListAllGoods = () =>
    new Promise((resolve, reject) => {
        getApi(`/me/goods`).then(response  => {
            if (response.data) {
                const goodsList = response.data;
                if (goodsList) {
                    resolve(goodsList);
                } else
                    reject();
            }
            else
                reject();
        }).catch(() => reject());
    });