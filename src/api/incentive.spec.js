import {apiGetIncentives} from './incentive';

jest.mock('./index')

describe('Incentives API functions', () => {
    it('apiGetIncentives should resolve data correctly', () => {
        apiGetIncentives().then( (result) => {
            expect(result).toEqual('mockedData')
        })
    })
})