import auth from './auth';
import {setLoginError, setLoginPending, setLoginSuccess, setUser} from '../actions/auth';

describe('auth reducer', () => {
    it('should handle initial state', () => {
        expect(
            auth(undefined, {})
        ).toEqual({
            user: null,
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: null
        })
    });

    it('should handle setUser', () => {
        expect(
            auth({
                user: null,
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setUser({
                name: 'username'
            }))
        ).toEqual({
            user: {
                name: 'username'
            },
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: null
        });

    });

    it('should handle setLoginPending', () => {
        expect(
            auth({
                user: null,
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setLoginPending(true))
        ).toEqual({
            user: null,
            isLoginSuccess: false,
            isLoginPending: true,
            loginError: null
        });

        expect(
            auth({
                user: null,
                isLoginSuccess: false,
                isLoginPending: true,
                loginError: null
            }, setLoginPending(false))
        ).toEqual({
            user: null,
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: null
        });
    });

    it('should handle setLoginSuccess', () => {
        expect(
            auth({
                user: null,
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setLoginSuccess(true))
        ).toEqual({
            user: null,
            isLoginSuccess: true,
            isLoginPending: false,
            loginError: null
        });

        expect(
            auth({
                user: null,
                isLoginSuccess: true,
                isLoginPending: false,
                loginError: null
            }, setLoginSuccess(false))
        ).toEqual({
            user: null,
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: null
        });
    });

    it('should handle setLoginError', () => {
        expect(
            auth({
                user: null,
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setLoginError('error'))
        ).toEqual({
            user: null,
            isLoginSuccess: false,
            isLoginPending: false,
            loginError: 'error'
        });
    });
});