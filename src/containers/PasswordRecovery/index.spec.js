import React from 'react';
import renderer from 'react-test-renderer';
import {PasswordRecoveryContainer} from './index';

it('renders correctly', () => {
    const lang = 'en'

    const actions = {
        localeActions: {
            setLocale: jest.fn(),
        },
    }

    const tree = renderer
        .create(<PasswordRecoveryContainer lang={lang} actions={actions}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});