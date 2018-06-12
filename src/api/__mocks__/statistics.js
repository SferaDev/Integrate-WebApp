const statistics = [
    ['2018-06-06', 1],
    ['2018-06-07', 2],
    ['2018-06-08', 3],
    ['2018-06-09', 4],
]

export const apiGetStatistics = (interval) => new Promise((resolve, reject) => {
    process.nextTick(
        () => resolve(statistics)
    );
});