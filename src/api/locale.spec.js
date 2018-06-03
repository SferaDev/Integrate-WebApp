import {apiSetLanguage} from './locale';

jest.mock('./index')

describe('Locale API functions', () => {
    it('apiSetLanguage should resolve data correctly', () => {
        const mockLanguage = 'ca'
        apiSetLanguage(mockLanguage).then( (result) => {
            expect(result).toEqual('mockedData')
        })
    })

    it('apiSetLanguage should catch an error when data is incorrect', () => {
        apiSetLanguage(null).catch(e =>
            expect(e).toEqual({
                errorPutApi: 'Request could not be done'
            })
        )
    })
})