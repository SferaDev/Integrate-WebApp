import {SET_LOGIN_ERROR, SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_USER} from '../constants/index';
import * as actions from './auth';

describe('Auth actions', () => {
    it('setLoginPending should create SET_LOGIN_PENDING action', () => {
        const user = {
            name: 'username',
        };
        expect(actions.setUser(user)).toEqual({
            type: SET_USER,
            user
        })
    })

    it('setLoginPending should create SET_LOGIN_PENDING action', () => {
        const isLoginPending = false;
        expect(actions.setLoginPending(isLoginPending)).toEqual({
            type: SET_LOGIN_PENDING,
            isLoginPending
        })
    })

    it('setLoginSuccess should create SET_LOGIN_SUCCESS action', () => {
        const isLoginSuccess = false;
        expect(actions.setLoginSuccess(isLoginSuccess)).toEqual({
            type: SET_LOGIN_SUCCESS,
            isLoginSuccess
        })
    });

    it('setLoginError should create SET_LOGIN_ERROR action', () => {
        const loginError = false;
        expect(actions.setLoginError(loginError)).toEqual({
            type: SET_LOGIN_ERROR,
            loginError
        })
    });
})