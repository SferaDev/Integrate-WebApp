import * as actions from './locale';
import {LOCALE_SET} from '../constants/ActionTypes';

describe('Auth actions', () => {
    it('setLoginPending should create SET_LOGIN_PENDING action', () => {
        const lang = 'ca';
        expect(actions.localeSet(lang)).toEqual({
            type: LOCALE_SET,
            lang
        })
    })
})