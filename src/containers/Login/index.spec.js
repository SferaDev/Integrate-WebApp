import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import auth from '../../reducers/auth';
import locale from '../../reducers/locale';
import ConnectedLogin, {Login} from './';
import {setLoginError, setLoginPending, setLoginSuccess} from "../../actions/auth";
import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('login feature', () => {
    let store, wrapper;
    beforeEach(() => {
        store = createStore(
            combineReducers({auth, locale}),
            applyMiddleware(thunk)
        );

        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedLogin/>
                </MemoryRouter>
            </Provider>);
    });

    it('isLoginPending prop should be updated', () => {
        store.dispatch(setLoginPending(true));
        expect(wrapper.find(Login).instance().props.isLoginPending).toEqual(true);
    });

    it('isLoginSuccess prop should be updated', () => {
        store.dispatch(setLoginSuccess(true));
        expect(wrapper.find(Login).instance().props.isLoginSuccess).toEqual(true);
    });

    it('loginError prop should be updated', () => {
        store.dispatch(setLoginError('error'));
        expect(wrapper.find(Login).instance().props.loginError).toEqual('error');
    });

});