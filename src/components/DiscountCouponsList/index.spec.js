import React from 'react'
import {shallow} from 'enzyme'
import DiscountCoupon from '../DiscountCoupon';
import DiscountCouponsList from './index';

const setup = (coupons = []) => {
    const component = shallow(
        <DiscountCouponsList coupons={coupons}/>
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
            url: 'http://www.fruteriasanpelayo.com/media/catalog/product/cache/1/image/680x560/75d5da3c2391ff3c948ada8220a45b7b/p/a/pan_barra_1.jpg',
            name: 'Barra de pa',
            originalPrice: '0.80',
            appliedDiscount: '20',
            currentPrice: '0.45',
            numberOfSolds: '40',
            numberOfFreeUnits: '60'
        }
    ]

    it('should render coupons', () => {
        const {coupons} = setup(coupon)
        const props = {
            url: coupon[0].url,
            name: coupon[0].name,
            originalPrice: coupon[0].originalPrice,
            appliedDiscount: coupon[0].appliedDiscount,
            currentPrice: coupon[0].currentPrice,
            numberOfSolds: coupon[0].numberOfSolds,
            numberOfFreeUnits: coupon[0].numberOfFreeUnits
        }

        expect(coupons.at(0).props()).toEqual(props)
    })
})
