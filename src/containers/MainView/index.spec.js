import React from 'react';
import renderer from 'react-test-renderer';
import {MainViewContainer} from './index';

it('renders correctly', () => {
    const incentives = {
        goodsCreated: 1,
        beneficiariesHelped: 1,
        totalSavedMoney: 1,
        numberLikes: 1,
    }

    const user = {
        name: 'Telepizza',
        picture: 'url',
        addressName: 'address',
        description: 'description',
        validationCode: 'kfjdls',
    }

    const auth = {
        isLoginPending: false,
        isLoginSuccess: true,
        loginError: null,
        user: user,
        token: 'token',
    }

    const lang = 'en'

    const actions = {
        localeActions: {
            setLocale: jest.fn(),
        },
        authActions: {
            setUser: jest.fn(),
            logoutAction: jest.fn(),
            deleteEntity: jest.fn(),
        },
        incentivesActions: {
            dispatchSetIncentives: jest.fn(),
        },
    }

    const tree = renderer
        .create(<MainViewContainer auth={auth} actions={actions} lang={lang} user={user} incentives={incentives}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});