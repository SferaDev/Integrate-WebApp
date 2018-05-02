import auth from './auth';
import {setLoginError, setLoginPending, setLoginSuccess} from "../actions/auth";

describe('auth reducer', () => {
    it('should handle initial state', () => {
        expect(
            auth(undefined, {})
        ).toEqual({
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: null
        })
    });

    it('should handle setLoginPending', () => {
        expect(
            auth({
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setLoginPending(true))
        ).toEqual({
            isLoginSuccess: false,
            isLoginPending: true,
            loginError: null
        });

        expect(
            auth({
                isLoginSuccess: false,
                isLoginPending: true,
                loginError: null
            }, setLoginPending(false))
        ).toEqual({
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: null
        });
    });

    it('should handle setLoginSuccess', () => {
        expect(
            auth({
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setLoginSuccess(true))
        ).toEqual({
            isLoginSuccess: true,
            isLoginPending: false,
            loginError: null
        });

        expect(
            auth({
                isLoginSuccess: true,
                isLoginPending: false,
                loginError: null
            }, setLoginSuccess(false))
        ).toEqual({
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: null
        });
    });

    it('should handle setLoginError', () => {
        expect(
            auth({
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setLoginError('error'))
        ).toEqual({
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: 'error'
        });
    });
});