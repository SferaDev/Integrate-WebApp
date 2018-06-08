import auth from './auth';
import {setLoginError, setLoginPending, setLoginSuccess, setUserAndToken} from '../actions/auth';
import {SET_USER} from '../constants';
import {LOG_OUT} from '../constants/ActionTypes';

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

    it('should handle setUserAndToken', () => {
        expect(
            auth({
                user: null,
                isLoginSuccess: false,
                isLoginPending: false,
                loginError: null
            }, setUserAndToken({
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

    it('should set items to localStorage on SET_USER action', () => {
        auth([], {
            type: SET_USER,
            user: 'user',
            token: 'token'
        })

        expect(JSON.parse(localStorage.getItem('user'))).toEqual('user')
        expect(localStorage.getItem('token')).toEqual('token')
    });

    it('should clear localStorage and call getDefaultUserState on LOG_OUT action', () => {
        auth([], {
            type: LOG_OUT,
        })

        expect(JSON.parse(localStorage.getItem('user'))).toBe(null)
        expect(localStorage.getItem('token')).toBe(null)
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