import * as types from '../constants/ActionTypes'
import modal from './modal';

describe('modal reducer', () => {
    it('should handle TOGGLE_MODAL from FALSE to TRUE', () => {
        expect(
            modal(
                {
                    isOpen: false,
                },
                {
                    type: types.TOGGLE_MODAL,
                }
            )
        ).toEqual(
            {
                isOpen: true,
            }
        )
    })

    it('should handle TOGGLE_MODAL_EDIT to edit a coupon', () => {
        expect(
            modal(
                {
                    isOpen: false,
                },
                {
                    type: types.TOGGLE_MODAL_EDIT,
                    good: {
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
                }
            )
        ).toEqual(
            {
                isOpen: true,
                good: {
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
            }
        )
    })

    it('should handle CLEAN_MODAL_STATE to reset the modal state', () => {
        expect(
            modal(
                {
                    isOpen: false,
                    good: {productName: 'I want to be cleaned'}
                },
                {
                    type: types.CLEAN_MODAL_STATE,
                }
            )
        ).toEqual(
            {
                isOpen: false,
                good: undefined
            }
        )
    })
})