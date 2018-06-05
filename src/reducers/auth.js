import {SET_LOGIN_ERROR, SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_USER} from '../constants';
import {LOG_OUT} from '../constants/ActionTypes';
import {localStorage} from "../utils/localstorage";

const getDefaultUserState = () => ({
    user: getUserFromLocalStorage(),
    isLoginSuccess: localStorage.getItem('token') !== null,
    isLoginPending: false,
    loginError: null
})

const getUserFromLocalStorage = () =>
    JSON.parse(localStorage.getItem('user'))

function authReducer(state = getDefaultUserState(), action) {
    switch (action.type) {
        case SET_USER:
            if (action.user && action.token) {
                localStorage.setItem('user', JSON.stringify(action.user))
                localStorage.setItem('token', action.token)
            }

            return {
                ...state,
                user: action.user,
                token: action.token,
            }
        case SET_LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            }

        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }

        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }

        case LOG_OUT:
            localStorage.clear()
            return getDefaultUserState()

        default:
            return state
    }
}

export default authReducer;