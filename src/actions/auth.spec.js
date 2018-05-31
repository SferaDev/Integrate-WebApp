import configureMockStore from 'redux-mock-store'
import {SET_LOGIN_ERROR, SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_USER} from '../constants/index';
import * as actions from './auth';
import {CLEAN_MODAL_STATE, LOCALE_SET, LOG_OUT, RESET_GOODS, RESET_LOCALE} from '../constants/ActionTypes';
import thunk from 'redux-thunk';
import {logoutAction} from './auth';
import localStorage from 'mock-local-storage'
import fetchMock from 'fetch-mock'

jest.mock('../api/login')
jest.mock('../actions/locale')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Auth actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('setLoginPending should create SET_LOGIN_PENDING action', () => {
        const user = {
            name: 'username',
        };
        const token = 'token'
        expect(actions.setUserAndToken(user, token)).toEqual({
            type: SET_USER,
            user,
            token,
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

    it('logout should create LOG_OUT action', () => {
        expect(actions.logout()).toEqual({
            type: LOG_OUT,
        })
    })

    it ('logoutAction should dispatch all reset and clean actions, and a logout action', () => {
        const expectedActions = [
            { type: RESET_GOODS },
            { type: RESET_LOCALE },
            { type: CLEAN_MODAL_STATE },
            { type: LOG_OUT },
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        store.dispatch(logoutAction())

        expect(store.getActions()).toEqual(expectedActions)
    })

    it ('CORRECT loginAction should dispatch all actions related and a set of the locale', () => {
        const mockUser = {
            id: 1,
            password: 'test'
        }

        const mockResult = {
            auth: {
                user: {
                    id: 1,
                    password: 'test',
                    interfaceLanguage: 'en',
                },
                token: 'token',
            } }

        const mockLangResult = {
            lang: 'en',
        }

        const expectedActions = [
            { type: SET_USER, user: null, token: null },
            { type: SET_LOGIN_PENDING, isLoginPending: true },
            { type: SET_LOGIN_SUCCESS, isLoginSuccess: false },
            { type: SET_LOGIN_ERROR, loginError: null },

            //AFTER apiPostLogin
            { type: SET_USER, user: mockResult.auth.user, token: mockResult.auth.token },
            { type: LOCALE_SET, lang: mockLangResult.lang },
            { type: SET_LOGIN_PENDING, isLoginPending: false },
            { type: SET_LOGIN_SUCCESS, isLoginSuccess: true },
            { type: SET_LOGIN_ERROR, loginError: null },
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        return store.dispatch(actions.loginAction(mockUser.id, mockUser.password)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it ('INCORRECT loginAction should dispatch all actions related', () => {
        const mockUser = {
            id: 2,
            password: 'test'
        }

        const expectedActions = [
            { type: SET_USER, user: null, token: null },
            { type: SET_LOGIN_PENDING, isLoginPending: true },
            { type: SET_LOGIN_SUCCESS, isLoginSuccess: false },
            { type: SET_LOGIN_ERROR, loginError: null },

            //AFTER apiPostLogin
            { type: LOG_OUT },
            { type: SET_LOGIN_PENDING, isLoginPending: false },
            { type: SET_LOGIN_SUCCESS, isLoginSuccess: false },
            { type: SET_LOGIN_ERROR, loginError: { error: 'User with id 2 not found.' } },
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        return store.dispatch(actions.loginAction(mockUser.id, mockUser.password)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})