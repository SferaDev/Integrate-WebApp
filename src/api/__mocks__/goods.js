const mockGoodsList = [
    {
        _id: '1',
        productName_original: 'Product name 1',
        picture: 'Picture 1',
        initialPrice: 1,
        discountType: '%',
        discount: 20,
        category: 1,
        reusePeriod: 3,
        pendingUnits: 3,
    },
    {
        _id: '2',
        productName_original: 'Product name 2',
        picture: 'Picture 2',
        initialPrice: 2,
        discountType: '%',
        discount: 20,
        category: 2,
        reusePeriod: 3,
        pendingUnits: 3,
    }]

export const apiGetListAllGoods = () => new Promise((resolve, reject) => {
    process.nextTick(
        () =>
            mockGoodsList
                ? resolve(mockGoodsList)
                : reject({
                    error: 'Goods list does not exist',
                }),
    );
});

export const apiAddNewGood = (good) => new Promise((resolve, reject) => {
    process.nextTick(
        () =>
            good
                ? resolve(good)
                : reject({
                    error: 'Good couldn\'t be added',
                }),
    );
});

export const apiDeleteExistingGood = (good) => new Promise((resolve, reject) => {
    process.nextTick(
        () =>
            good
                ? resolve(good)
                : reject({
                    error: 'Good couldn\'t be deleted',
                }),
    );
});

export const apiUpdateExistingGood = (good) => new Promise((resolve, reject) => {
    process.nextTick(
        () =>
            good
                ? resolve(good)
                : reject({
                    error: 'Good couldn\'t be deleted',
                }),
    );
});