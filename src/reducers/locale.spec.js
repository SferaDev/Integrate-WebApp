import {LOCALE_SET, RESET_LOCALE} from '../constants/ActionTypes';
import locale from './locale';

describe('locale reducer', () => {
    it('should handle initial state', () => {
        expect(
            locale(undefined, {})
        ).toEqual({
            lang: 'ca'
        })
    });

    it('should handle LOCALE_SET', () => {
        expect(
            locale('ca', {
                type: LOCALE_SET,
                lang: 'es',
            })
        ).toEqual({
            lang: 'es',
        })
    });

    it('should handle RESET_LOCALE', () => {
        expect(
            locale('en', {
                type: RESET_LOCALE,
            })
        ).toEqual({
            lang: 'ca',
        })
    });

    it('should keep the user locale when a RESET_LOCALE is thrown with a user in localStorage', () => {
        const user = {
            interfaceLanguage: 'es'
        }
        localStorage.setItem('user', JSON.stringify(user))

        expect(
            locale('en', {
                type: RESET_LOCALE,
            })
        ).toEqual({
            lang: 'es',
        })
    });
})