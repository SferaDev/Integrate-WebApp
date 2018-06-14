export const apiGetIncentives = () => new Promise((resolve, reject) => {
    const incentives = {
        goodsCreated: 1,
        beneficiariesHelped: 1,
        totalSavedMoney: 1.00,
    }

    if (incentives) resolve(incentives)
    else reject()
});