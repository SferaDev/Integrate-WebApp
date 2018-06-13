import React from 'react';
import {ChangePasswordContainer} from './index';
import renderer from 'react-test-renderer';

describe('Snapshots', () => {
    it('renders correctly', () => {
        const userName = 'Telepizza'

        const auth = {
            isLoginPending: false,
            isLoginSuccess: true,
            loginError: null,
            user: {
                name: 'Telepizza',
                address: 'Address',
                description: 'description',
                validationCode: '423423',
            },
            token: 'token',
        }

        const lang = 'en'

        const actions = {
            localeActions: {
                setLocale: jest.fn(),
            },
            authActions: {
                logoutAction: jest.fn(),
            },
        }

        const tree = renderer
            .create(<ChangePasswordContainer auth={auth} actions={actions} lang={lang} userName={userName}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})