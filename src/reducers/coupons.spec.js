import coupons from './coupons'
import * as types from '../constants/ActionTypes'

describe('coupons reducer', () => {
    it('should handle ADD_COUPON', () => {
        expect(
            coupons([], {
                type: types.ADD_COUPON,
                productName: 'Product name 1',
                picture: 'Picture 1',
                initialPrice: 'Initial price 1',
                discountType: '%',
                discount: '20',
                category: 'Category 1',
                reusePeriod: '3',
                pendingUnits: '3',

            })
        ).toEqual([
            {
                id: 0,
                productName: 'Product name 1',
                picture: 'Picture 1',
                initialPrice: 'Initial price 1',
                discountType: '%',
                discount: '20',
                category: 'Category 1',
                reusePeriod: '3',
                pendingUnits: '3',
            }
        ])

        expect(
            coupons([
                {
                    id: 0,
                    productName: 'Product name 1',
                    picture: 'Picture 1',
                    initialPrice: 'Initial price 1',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 1',
                    reusePeriod: '3',
                    pendingUnits: '3',
                }
            ], {
                type: types.ADD_COUPON,
                productName: 'Product name 2',
                picture: 'Picture 2',
                initialPrice: 'Initial price 2',
                discountType: '%',
                discount: '20',
                category: 'Category 2',
                reusePeriod: '3',
                pendingUnits: '3',
            })
        ).toEqual([
            {
                id: 0,
                productName: 'Product name 1',
                picture: 'Picture 1',
                initialPrice: 'Initial price 1',
                discountType: '%',
                discount: '20',
                category: 'Category 1',
                reusePeriod: '3',
                pendingUnits: '3',
            },
            {
                id: 1,
                productName: 'Product name 2',
                picture: 'Picture 2',
                initialPrice: 'Initial price 2',
                discountType: '%',
                discount: '20',
                category: 'Category 2',
                reusePeriod: '3',
                pendingUnits: '3',
            }
        ])
    })

    it('should handle DELETE_COUPON', () => {
        expect(
            coupons([
                {
                    id: 0,
                    productName: 'Product name 1',
                    picture: 'Picture 1',
                    initialPrice: 'Initial price 1',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 1',
                    reusePeriod: '3',
                    pendingUnits: '3',
                },
                {
                    id: 1,
                    productName: 'Product name 2',
                    picture: 'Picture 2',
                    initialPrice: 'Initial price 2',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 2',
                    reusePeriod: '3',
                    pendingUnits: '3',
                }
            ], {
                type: types.DELETE_COUPON,
                id: 1
            })
        ).toEqual([
            {
                id: 0,
                productName: 'Product name 1',
                picture: 'Picture 1',
                initialPrice: 'Initial price 1',
                discountType: '%',
                discount: '20',
                category: 'Category 1',
                reusePeriod: '3',
                pendingUnits: '3',
            }
        ])
    })

    it('should handle EDIT_COUPON', () => {
        expect(
            coupons([
                {
                    id: 0,
                    productName: 'Product name 1',
                    picture: 'Picture 1',
                    initialPrice: 'Initial price 1',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 1',
                    reusePeriod: '3',
                    pendingUnits: '3',
                },
                {
                    id: 1,
                    productName: 'Product name 2',
                    picture: 'Picture 2',
                    initialPrice: 'Initial price 2',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 2',
                    reusePeriod: '3',
                    pendingUnits: '3',
                }
            ], {
                type: types.EDIT_COUPON,
                id: 0,
                productName: 'Product name 1 edited',
                picture: 'Picture 1 edited',
                initialPrice: 'Initial price 1 edited',
                discountType: '%',
                discount: '20',
                category: 'Category 1 edited',
                reusePeriod: '3',
                pendingUnits: '3',
            })
        ).toEqual([
            {
                id: 0,
                productName: 'Product name 1 edited',
                picture: 'Picture 1 edited',
                initialPrice: 'Initial price 1 edited',
                discountType: '%',
                discount: '20',
                category: 'Category 1 edited',
                reusePeriod: '3',
                pendingUnits: '3',
            },
            {
                id: 1,
                productName: 'Product name 2',
                picture: 'Picture 2',
                initialPrice: 'Initial price 2',
                discountType: '%',
                discount: '20',
                category: 'Category 2',
                reusePeriod: '3',
                pendingUnits: '3',
            }
        ])
    })
})