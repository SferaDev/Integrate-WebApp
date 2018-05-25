import {apiPostLogin} from '../api';
import {SET_LOGIN_ERROR, SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_USER} from '../constants';
import {localeSet} from './locale';

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}

export function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

export function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    };
}

export function loginAction(id, password) {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(setUser(null));
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        apiPostLogin({id, password}).then(auth => {
            localStorage.setItem('token', auth.token);
            dispatch(setUser(auth.user));
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
            dispatch(setLoginError(null));
            dispatch(localeSet(auth.user.interfaceLanguage));
        }).catch(error => {
            localStorage.removeItem('token');
            dispatch(setUser(null));
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(false));
            dispatch(setLoginError(error));
        })
    }
}