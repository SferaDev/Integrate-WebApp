import React from 'react'
import {shallow} from 'enzyme'
import DiscountCoupon from '../DiscountCoupon';
import DiscountCouponsList from './index';

const modalStub = {
    modalAddCoupon: {isOpen: false},
    modalEditCoupon: {isOpen: false},
}

const actionsStub = {}

const setup = (coupons = [], modal, actions) => {
    const component = shallow(
        <DiscountCouponsList coupons={coupons} modal={modalStub} actions={actionsStub}/>
    )

    return {
        component: component,
        coupons: component.find(DiscountCoupon),
    }
}

describe('when given coupon', () => {
    const coupon = [
        {
            id: 1,
            picture: 'http://www.fruteriasanpelayo.com/media/catalog/product/cache/1/image/680x560/75d5da3c2391ff3c948ada8220a45b7b/p/a/pan_barra_1.jpg',
            productName: 'Barra de pa',
            initialPrice: '0.80',
            discount: '20',
            discountType: '%',
            pendingUnits: '2',
            category: 'Food',
            reusePeriod: '1',
        }
    ]

    it('should render coupons', () => {
        const {coupons} = setup(coupon)
        const props = {
            modal: {isOpen: false},
            actions: {},
            coupon: {
                id: coupon[0].id,
                picture: coupon[0].picture,
                productName: coupon[0].productName,
                initialPrice: coupon[0].initialPrice,
                discount: coupon[0].discount,
                discountType: coupon[0].discountType,
                pendingUnits: coupon[0].pendingUnits,
                category: coupon[0].category,
                reusePeriod: coupon[0].reusePeriod
            }
        }

        expect(coupons.at(0).props()).toEqual(props)
    })
})
