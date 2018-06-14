import {apiAddNewGood, apiDeleteExistingGood, apiGetListAllGoods, apiUpdateExistingGood} from './goods';

jest.mock('./index')

describe('Goods API functions', () => {
    it('apiGetListAllGoods should resolve data correctly', () => {
        apiGetListAllGoods().then( (result) => {
            expect(result).toEqual('mockedData')
        })
    })

    it('apiGetListAllGoods should catch an error when data is incorrect', () => {
        apiGetListAllGoods().catch(e =>
            expect(e).toEqual({
                errorPutApi: 'Reqqquest could not be done'
            })
        )
    })

    it('apiAddNewGood should resolve data correctly', () => {
        const mockedGood = {
            good: 'mockedGood'
        }
        apiAddNewGood(mockedGood).then( (result) => {
            expect(result).toEqual('mockedData')
        })
    })

    it('apiAddNewGood should catch an error when data is incorrect', () => {
        apiAddNewGood(null).catch(e =>
            expect(e).toEqual({
                errorPostApi: 'Request could not be done'
            })
        )
    })

    it('apiUpdateExistingGood should resolve data correctly', () => {
        const mockedGood = {
            good: 'mockedGood'
        }
        apiUpdateExistingGood(mockedGood).then( (result) => {
            expect(result).toEqual('mockedData')
        })
    })

    it('apiUpdateExistingGood should catch an error when data is incorrect', () => {
        const mockedIncorrectGood = {
            good: 'mockedIncorrectGood',
        }
        apiUpdateExistingGood(mockedIncorrectGood).catch(e =>
            expect(e).toEqual({
                errorPutApi: 'Request could not be done'
            })
        )
    })

    it('apiDeleteExistingGood should resolve data correctly', () => {
        const mockedGood = {
            good: 'mockedGood'
        }
        apiDeleteExistingGood(mockedGood).then( (result) => {
            expect(result).toEqual('mockedData')
        })
    })

    it('apiDeleteExistingGood should catch an error when data is incorrect', () => {
        const mockedIncorrectGood = {
            good: 'mockedIncorrectGood',
        }
        apiDeleteExistingGood(mockedIncorrectGood).catch(e =>
            expect(e).toEqual({
                errorDeleteApi: 'Request could not be done'
            })
        )
    })
})