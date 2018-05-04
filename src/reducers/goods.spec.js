import goods from './goods'
import * as types from '../constants/ActionTypes'

describe('goods reducer', () => {
    it ('should handle RECEIVE_GOODS', () => {
        expect(
            goods([], {
                type: types.RECEIVE_GOODS,
                goods: [
                    {
                        id: 1,
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
                        id: 2,
                        productName: 'Product name 2',
                        picture: 'Picture 2',
                        initialPrice: 'Initial price 2',
                        discountType: '%',
                        discount: '20',
                        category: 'Category 2',
                        reusePeriod: '3',
                        pendingUnits: '3',
                    }]
            })
        ).toEqual([
            {
                id: 1,
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
                id: 2,
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

    it('should handle ADD_GOOD', () => {
        expect(
            goods([], {
                type: types.ADD_GOOD,
                good: {
                    productName: 'Product name 1',
                    picture: 'Picture 1',
                    initialPrice: 'Initial price 1',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 1',
                    reusePeriod: '3',
                    pendingUnits: '3',
                }
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
            goods([
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
                type: types.ADD_GOOD,
                good: {
                    productName: 'Product name 2',
                    picture: 'Picture 2',
                    initialPrice: 'Initial price 2',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 2',
                    reusePeriod: '3',
                    pendingUnits: '3',
                }
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

    it('should handle DELETE_GOOD', () => {
        expect(
            goods([
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
                type: types.DELETE_GOOD,
                good: {
                    id: 1
                }
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

    it('should handle EDIT_GOOD', () => {
        expect(
            goods([
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
                type: types.EDIT_GOOD,
                good: {
                    id: 0,
                    productName: 'Product name 1 edited',
                    picture: 'Picture 1 edited',
                    initialPrice: 'Initial price 1 edited',
                    discountType: '%',
                    discount: '20',
                    category: 'Category 1 edited',
                    reusePeriod: '3',
                    pendingUnits: '3',
                }
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