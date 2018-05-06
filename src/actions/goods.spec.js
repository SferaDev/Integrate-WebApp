import * as types from '../constants/ActionTypes'
import * as actions from './goods'

describe('Good actions', () => {
    it('receiveGoods should create RECEIVE_GOODS action', () => {
        const mockGoods = [];
        expect(actions.receiveGoods(mockGoods)).toEqual({
            type: types.RECEIVE_GOODS,
            goods: mockGoods,
        })
    });

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

    it('deleteGood should create DELETE_GOOD action', () => {
        const Good = {};
        expect(actions.deleteGood(Good)).toEqual({
            type: types.DELETE_GOOD,
            good: {}
        })
    });

    it('editTodo should create EDIT_GOOD action', () => {
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
});

