import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('coupon actions', () => {
    it('addCoupon should create ADD_COUPON action', () => {
        expect(actions.addCoupon({
            productName: 'Coupon name 1',
            picture: 'Coupon picture 1',
            discountType: '%',
            discount: '20',
            category: 'Food',
            reusePeriod: '1',
            initialPrice: '0.60',
            pendingUnits: '3'
        })).toEqual({
            type: types.ADD_COUPON,
            coupon: {
                productName: 'Coupon name 1',
                picture: 'Coupon picture 1',
                initialPrice: '0.60',
                discountType: '%',
                discount: '20',
                category: 'Food',
                reusePeriod: '1',
                pendingUnits: '3',
            }
        })
    })

    it('deleteCoupon should create DELETE_COUPON action', () => {
        const coupon = {}
        expect(actions.deleteCoupon(coupon)).toEqual({
            type: types.DELETE_COUPON,
            coupon: {}
        })
    })

    it('editTodo should create EDIT_TODO action', () => {
        expect(actions.editCoupon({
            id: 1,
            productName: 'Coupon name 1',
            picture: 'Coupon picture 1',
            discountType: '%',
            discount: '20',
            category: 'Food',
            reusePeriod: '1',
            initialPrice: '0.60',
            pendingUnits: '3'
        })).toEqual({
            type: types.EDIT_COUPON,
            coupon: {
                id: 1,
                productName: 'Coupon name 1',
                picture: 'Coupon picture 1',
                initialPrice: '0.60',
                discountType: '%',
                discount: '20',
                category: 'Food',
                reusePeriod: '1',
                pendingUnits: '3',
            }
        })
    })
})