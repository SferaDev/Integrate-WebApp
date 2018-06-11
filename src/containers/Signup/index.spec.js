import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import auth from '../../reducers/auth';
import locale from '../../reducers/locale';
import ConnectedSignUp, {SignupContainer} from './';
import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});





describe('Signup', () => {

    let store, wrapper;
    beforeEach(() => {
        store = createStore(
            combineReducers({auth, locale}),
            applyMiddleware(thunk)
        );

        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedSignUp/>
                </MemoryRouter>
            </Provider>);
    });

    it('is has a LanguageSelector', () => {
        expect(wrapper.find(SignupContainer).find('LanguageSelector').length).toEqual(1);


    });

    it('is has a IntlProvider', () => {
        expect(wrapper.find(SignupContainer).find('IntlProvider').length).toEqual(1);

    });

    it('is has a SignUp component', () => {
        expect(wrapper.find(SignupContainer).find('SignUp').length).toEqual(1);

    });

});