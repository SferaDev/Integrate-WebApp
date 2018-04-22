import {apiPostLogin} from '../api';
import {
    SET_LOGIN_ERROR,
    SET_LOGIN_PENDING,
    SET_LOGIN_SUCCESS
} from '../constants/index';

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}

export function loginAction(id, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        apiPostLogin({id, password})
            .then(token => {
                localStorage.setItem('token', token);

                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
            })
            .catch(error => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(false));
                dispatch(setLoginError(error))
            })
    }
}