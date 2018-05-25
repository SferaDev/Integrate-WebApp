import {combineReducers, createStore} from 'redux';
import locale from './locale';
import auth from './auth';
import goods from './goods';
import modal from './modal';

let store = createStore(
    combineReducers({
        auth,
        goods,
        modal,
        locale,
    })
)

// check that initial state of the root reducer matches
// what child reducers return given an empty action
describe("Combine reducers", () => {
    it("should handle initial states", () => {
        expect(store.getState().auth).toEqual(auth(undefined, {}))
        expect(store.getState().goods).toEqual(goods(undefined, {}))
        expect(store.getState().modal).toEqual(modal(undefined, {}))
        expect(store.getState().locale).toEqual(locale(undefined, {}))
    })

    it("should handle actions", () => {
        let action = { type: 'ACTION' }
        store.dispatch(action)
        expect(store.getState().auth).toEqual(auth(undefined, action))
        expect(store.getState().goods).toEqual(goods(undefined, action))
        expect(store.getState().modal).toEqual(modal(undefined, action))
        expect(store.getState().locale).toEqual(locale(undefined, action))
    })
})