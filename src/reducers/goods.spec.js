import goods from './goods'
import * as types from '../constants/ActionTypes'

describe('goods reducer', () => {
    it('should handle initial state', () => {
        expect(
            goods(undefined, {})
        ).toEqual([])
    });

    it('should handle RECEIVE_GOODS', () => {
        expect(
            goods([], {
                type: types.RECEIVE_GOODS,
                goods: [
                    {
                        _id: '1',
                        productName_original: 'Product name 1',
                        picture: 'Picture 1',
                        initialPrice: 1,
                        discountType: '%',
                        discount: 20,
                        category: 1,
                        reusePeriod: 3,
                        pendingUnits: 3,
                    },
                    {
                        _id: '2',
                        productName_original: 'Product name 2',
                        picture: 'Picture 2',
                        initialPrice: 2,
                        discountType: '%',
                        discount: 20,
                        category: 2,
                        reusePeriod: 3,
                        pendingUnits: 3,
                    }]
            })
        ).toEqual([
            {
                _id: '1',
                productName: 'Product name 1',
                picture: 'Picture 1',
                initialPrice: 1,
                discountType: '%',
                discount: 20,
                category: 1,
                reusePeriod: 3,
                pendingUnits: 3,
            },
            {
                _id: '2',
                productName: 'Product name 2',
                picture: 'Picture 2',
                initialPrice: 2,
                discountType: '%',
                discount: 20,
                category: 2,
                reusePeriod: 3,
                pendingUnits: 3,
            }
        ])
    });

    it('should handle ADD_GOOD', () => {
        expect(
            goods([], {
                type: types.ADD_GOOD,
                good: {
                    _id: '0',
                    productName: 'Product name 1',
                    picture: 'Picture 1',
                    initialPrice: 1,
                    discountType: '%',
                    discount: 20,
                    category: 1,
                    reusePeriod: 3,
                    pendingUnits: 3,
                }
            })
        ).toEqual([
            {
                _id: '0',
                productName: 'Product name 1',
                picture: 'Picture 1',
                initialPrice: 1,
                discountType: '%',
                discount: 20,
                category: 1,
                reusePeriod: 3,
                pendingUnits: 3,
            }
        ])
    });

    it('should handle DELETE_GOOD', () => {
        expect(
            goods([
                {
                    _id: '0',
                    productName: 'Product name 1',
                    picture: 'Picture 1',
                    initialPrice: 1,
                    discountType: '%',
                    discount: 20,
                    category: 1,
                    reusePeriod: 3,
                    pendingUnits: 3,
                },
                {
                    _id: '1',
                    productName: 'Product name 2',
                    picture: 'Picture 2',
                    initialPrice: 2,
                    discountType: '%',
                    discount: 20,
                    category: 2,
                    reusePeriod: 3,
                    pendingUnits: 3,
                }
            ], {
                type: types.DELETE_GOOD,
                good: {
                    _id: '1'
                }
            })
        ).toEqual([
            {
                _id: '0',
                productName: 'Product name 1',
                picture: 'Picture 1',
                initialPrice: 1,
                discountType: '%',
                discount: 20,
                category: 1,
                reusePeriod: 3,
                pendingUnits: 3,
            }
        ])
    });

    it('should handle EDIT_GOOD', () => {
        expect(
            goods([
                {
                    _id: '0',
                    productName: 'Product name 1',
                    picture: 'Picture 1',
                    initialPrice: 1,
                    discountType: '%',
                    discount: 20,
                    category: 1,
                    reusePeriod: 3,
                    pendingUnits: 3,
                },
                {
                    _id: '1',
                    productName: 'Product name 2',
                    picture: 'Picture 2',
                    initialPrice: 2,
                    discountType: '%',
                    discount: 20,
                    category: 2,
                    reusePeriod: 3,
                    pendingUnits: 3,
                }
            ], {
                type: types.EDIT_GOOD,
                good: {
                    _id: '0',
                    productName: 'Product name 1 edited',
                    picture: 'Picture 1 edited',
                    initialPrice: 5,
                    discountType: '%',
                    discount: 5,
                    category: 5,
                    reusePeriod: 5,
                    pendingUnits: 5,
                }
            })
        ).toEqual([
            {
                _id: '0',
                productName: 'Product name 1 edited',
                picture: 'Picture 1 edited',
                initialPrice: 5,
                discountType: '%',
                discount: 5,
                category: 5,
                reusePeriod: 5,
                pendingUnits: 5,
            },
            {
                _id: '1',
                productName: 'Product name 2',
                picture: 'Picture 2',
                initialPrice: 2,
                discountType: '%',
                discount: 20,
                category: 2,
                reusePeriod: 3,
                pendingUnits: 3,
            }
        ])
    })
});