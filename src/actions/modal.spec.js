import * as types from '../constants/ActionTypes'
import * as actions from './modal'
import {TOGGLE_MODAL} from '../constants/ActionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {TOGGLE_MODAL_EDIT} from '../constants/ActionTypes';
import {CLEAN_MODAL_STATE} from '../constants/ActionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Modal actions', () => {
    it('toggleModal should create TOGGLE_MODAL action', () => {
        expect(actions.toggleModal()).toEqual({
            type: types.TOGGLE_MODAL,
        })
    });

    it('dispatchToggleModal should dispatch the TOGGLE_MODAL action', () => {
        const expectedActions = [
            {
                type: TOGGLE_MODAL,
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        store.dispatch(actions.dispatchToggleModal())
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('toggleModalEdit should create TOGGLE_MODAL_EDIT action', () => {
        const Good = {};
        expect(actions.toggleModalEdit(Good)).toEqual({
            type: types.TOGGLE_MODAL_EDIT,
            good: {}
        })
    });

    it('dispatchToggleModalEdit should dispatch the TOGGLE_MODAL_EDIT action', () => {
        const expectedActions = [
            {
                type: TOGGLE_MODAL_EDIT,
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        store.dispatch(actions.dispatchToggleModalEdit())
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('cleanModalState should create CLEAN_MODAL_STATE action', () => {
        expect(actions.cleanModalState()).toEqual({
            type: types.CLEAN_MODAL_STATE,
        })
    })

    it('dispatchCleanModalState should dispatch the CLEAN_MODAL_STATE action', () => {
        const expectedActions = [
            {
                type: CLEAN_MODAL_STATE,
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        store.dispatch(actions.dispatchCleanModalState())
        expect(store.getActions()).toEqual(expectedActions)
    })
});
