import {apiPutChangePassword} from './changepassword';

jest.mock('./index')

describe('Change password API functions', () => {
    it('apiPutChangePassword should resolve data correctly', () => {
        const mockOldPassword = 'oldPassword'
        const mockNewPassword = 'newPassword'
        apiPutChangePassword(mockOldPassword, mockNewPassword).then( (result) => {
            expect(result).toEqual(mockNewPassword)
        })
    })

    it('apiPutChangePassword should catch an error when data is incorrect', () => {
        apiPutChangePassword(null, null).catch(e =>
            expect(e).toEqual({
                errorPutApi: 'Request could not be done'
            })
        )
    })
})