import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {}
const store = mockStore(initialState)

function setup() {
    const props = { store }

    const enzymeWrapper = mount(
        <Provider {...props}>
            <Router>
                <Switch>
                    <Route exact path="/"/>
                </Switch>
            </Router>
        </Provider>)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Provider', () => {
        it('should render self and its subcomponents', () => {
            const { enzymeWrapper, props } = setup()

            expect(enzymeWrapper.find(Provider).prop('store')).toEqual(props.store)
        })
    })
})