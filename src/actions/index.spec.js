import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('coupon actions', () => {
    it('addCoupon should create ADD_COUPON action', () => {
        expect(actions.addCoupon('Coupon name 1', 'Coupon picture 1', '%', '20', 'Food', '1', '0.60', '3')).toEqual({
            type: types.ADD_COUPON,
            productName: 'Coupon name 1',
            picture: 'Coupon picture 1',
            initialPrice: '0.60',
            discountType: '%',
            discount: '20',
            category: 'Food',
            reusePeriod: '1',
            pendingUnits: '3',
        })
    })

    it('deleteCoupon should create DELETE_COUPON action', () => {
        expect(actions.deleteCoupon(1)).toEqual({
            type: types.DELETE_COUPON,
            id: 1
        })
    })

    it('editTodo should create EDIT_TODO action', () => {
        expect(actions.editCoupon(1, 'Coupon name 1', 'Coupon picture 1', '%', '20', 'Food', '1', '0.60', '3')).toEqual({
            type: types.EDIT_COUPON,
            id: 1,
            productName: 'Coupon name 1',
            picture: 'Coupon picture 1',
            initialPrice: '0.60',
            discountType: '%',
            discount: '20',
            category: 'Food',
            reusePeriod: '1',
            pendingUnits: '3',
        })
    })
})