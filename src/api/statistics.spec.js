import {apiGetStatistics} from './statistics';

jest.mock('./index')

describe('Statistics API functions', () => {
    it('apiGetStatistics should resolve data correctly', () => {
        apiGetStatistics('Week').then((result) => {
            expect(result).toEqual([
                ['2018-06-06', 1],
                ['2018-06-07', 2],
                ['2018-06-08', 3],
                ['2018-06-09', 4],
            ])
        })
    })
})