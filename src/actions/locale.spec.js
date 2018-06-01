import * as actions from './locale';
import {LOCALE_SET, RESET_LOCALE} from '../constants/ActionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

jest.mock('../api/locale')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Locale actions', () => {
    it('localeSet should create LOCALE_SET action', () => {
        const lang = 'ca';
        expect(actions.localeSet(lang)).toEqual({
            type: LOCALE_SET,
            lang
        })
    })

    it('setLocale should dispatch the LOCALE_SET action', () => {
        const mockLang = 'ca'

        const expectedActions = [
            {
                type: LOCALE_SET,
                lang: mockLang
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        return store.dispatch(actions.setLocale(mockLang)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('resetLocale should create RESET_LOCALE action', () => {
        expect(actions.resetLocale()).toEqual({
            type: RESET_LOCALE,
        })
    })
})