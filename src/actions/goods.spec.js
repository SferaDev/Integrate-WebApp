import * as types from '../constants/ActionTypes'
import * as actions from './goods'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {RECEIVE_GOODS} from '../constants/ActionTypes';
import {ADD_GOOD} from '../constants/ActionTypes';
import {DELETE_GOOD} from '../constants/ActionTypes';
import {EDIT_GOOD} from '../constants/ActionTypes';
import {RESET_GOODS} from '../constants/ActionTypes';
import {resetGoods} from './goods';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('../api/goods')

describe('Good actions', () => {
    it('receiveGoods should create RECEIVE_GOODS action', () => {
        const mockGoods = [];
        expect(actions.receiveGoods(mockGoods)).toEqual({
            type: types.RECEIVE_GOODS,
            goods: mockGoods,
        })
    });

    it('dispatchReceiveGoods should dispatch the RECEIVE_GOODS action', () => {
        const expectedActions = [
            {
                type: RECEIVE_GOODS,
                goods: [
                    {
                        "_id": "1",
                        "category": 1,
                        "discount": 20,
                        "discountType": "%",
                        "initialPrice": 1,
                        "pendingUnits": 3,
                        "picture": "Picture 1",
                        "productName_original": "Product name 1",
                        "reusePeriod": 3,
                    },
                    {
                        "_id": "2",
                        "category": 2,
                        "discount": 20,
                        "discountType": "%",
                        "initialPrice": 2,
                        "pendingUnits": 3,
                        "picture": "Picture 2",
                        "productName_original": "Product name 2",
                        "reusePeriod": 3,
                    }
                ]
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        return store.dispatch(actions.dispatchReceiveGoods()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('addGood should create ADD_GOOD action', () => {
        expect(actions.addGood({
            productName: 'Good name 1',
            picture: 'Good picture 1',
            discountType: '%',
            discount: '20',
            category: 'Food',
            reusePeriod: '1',
            initialPrice: '0.60',
            pendingUnits: '3'
        })).toEqual({
            type: types.ADD_GOOD,
            good: {
                productName: 'Good name 1',
                picture: 'Good picture 1',
                initialPrice: '0.60',
                discountType: '%',
                discount: '20',
                category: 'Food',
                reusePeriod: '1',
                pendingUnits: '3',
            }
        })
    });

    it('dispatchAddGood should dispatch the ADD_GOOD action', () => {
        const mockGoodToAdd = {
            "_id": "1",
            "category": 1,
            "discount": 20,
            "discountType": "%",
            "initialPrice": 1,
            "pendingUnits": 3,
            "picture": "Picture 1",
            "productName_original": "Product name 1",
            "reusePeriod": 3,
        }

        const expectedActions = [
            {
                type: ADD_GOOD,
                good: mockGoodToAdd
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        return store.dispatch(actions.dispatchAddGood(mockGoodToAdd)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('deleteGood should create DELETE_GOOD action', () => {
        const Good = {};
        expect(actions.deleteGood(Good)).toEqual({
            type: types.DELETE_GOOD,
            good: {}
        })
    });

    it('dispatchDeleteGood should dispatch the DELETE_GOOD action', () => {
        const mockGoodToDelete = {
            "_id": "1",
            "category": 1,
            "discount": 20,
            "discountType": "%",
            "initialPrice": 1,
            "pendingUnits": 3,
            "picture": "Picture 1",
            "productName_original": "Product name 1",
            "reusePeriod": 3,
        }

        const expectedActions = [
            {
                type: DELETE_GOOD,
                good: mockGoodToDelete
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        return store.dispatch(actions.dispatchDeleteGood(mockGoodToDelete)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('editGood should create EDIT_GOOD action', () => {
        expect(actions.editGood({
            id: 1,
            productName: 'Good name 1',
            picture: 'Good picture 1',
            discountType: '%',
            discount: '20',
            category: 'Food',
            reusePeriod: '1',
            initialPrice: '0.60',
            pendingUnits: '3'
        })).toEqual({
            type: types.EDIT_GOOD,
            good: {
                id: 1,
                productName: 'Good name 1',
                picture: 'Good picture 1',
                initialPrice: '0.60',
                discountType: '%',
                discount: '20',
                category: 'Food',
                reusePeriod: '1',
                pendingUnits: '3',
            }
        })
    })

    it('dispatchEditGood should dispatch the EDIT_GOOD action', () => {
        const mockGoodToEdit = {
            "_id": "1",
            "category": 1,
            "discount": 20,
            "discountType": "%",
            "initialPrice": 1,
            "pendingUnits": 3,
            "picture": "Picture 1",
            "productName_original": "Product name 1",
            "reusePeriod": 3,
        }

        const expectedActions = [
            {
                type: EDIT_GOOD,
                good: mockGoodToEdit
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        return store.dispatch(actions.dispatchEditGood(mockGoodToEdit)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it ('resetGoods should dispatch RESET_GOODS action', () => {
        const expectedActions = [
            { type: RESET_GOODS },
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {} })

        store.dispatch(resetGoods())

        expect(store.getActions()).toEqual(expectedActions)
    })
});

