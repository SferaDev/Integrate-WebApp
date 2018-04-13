import * as types from '../constants/ActionTypes'
import modal from './modal';

describe('modal reducer', () => {
    it('should handle TOGGLE_MODAL_ADDCOUPON from FALSE to TRUE', () => {
        expect(
            modal(
                {
                    modalAddCoupon:
                        {
                            isOpen: false
                        },
                    modalEditCoupon:
                        {
                            isOpen: false
                        },
                },
                {
                    type: types.TOGGLE_MODAL_ADDCOUPON,
                }
            )
        ).toEqual(
            {
                modalAddCoupon: {
                    isOpen: true
                },
                modalEditCoupon: {
                    isOpen: false
                },
            }
        )
    })

    it('should handle TOGGLE_MODAL_EDITCOUPON from TRUE to FALSE', () => {
        expect(
            modal({
                modalAddCoupon: {
                    isOpen: false
                },
                modalEditCoupon: {
                    isOpen: true
                },
            }, {
                type: types.TOGGLE_MODAL_EDITCOUPON
            })
        ).toEqual(
            {
                modalAddCoupon: {
                    isOpen: false
                },
                modalEditCoupon: {
                    isOpen: false
                },
            }
        )
    })
})