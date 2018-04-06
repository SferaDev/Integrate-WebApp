import React from 'react'
import {shallow} from 'enzyme'
import DiscountCoupon from './index';

const setup = props => {
    const component = shallow(
        <DiscountCoupon url={props.url} name={props.name} originalPrice={props.originalPrice}
                        appliedDiscount={props.appliedDiscount}
                        currentPrice={props.currentPrice} numberOfSolds={props.numberOfSolds}
                        numberOfFreeUnits={props.numberOfFreeUnits}/>
    )

    return {
        component: component,
        spanName: component.find('.name'),
        spanOriginalPrice: component.find('.originalPrice'),
        spanAppliedDiscount: component.find('.appliedDiscount'),
        spanCurrentPrice: component.find('.currentPrice'),
        spanNumberOfSolds: component.find('.numberOfSolds'),
        spanNumberOfFreeUnits: component.find('.numberOfFreeUnits')
    }
}

describe('DiscountCouponsList component', () => {
    it('should render name', () => {
        const {spanName} = setup({name: 'Test Coupons'})
        expect(spanName.text()).toMatch(/^Test Coupons$/)
    })

    it('should render original price', () => {
        const {spanOriginalPrice} = setup({originalPrice: '40'})
        expect(spanOriginalPrice.text()).toMatch(/^40€$/)
    })

    it('should render applied discount', () => {
        const {spanAppliedDiscount} = setup({appliedDiscount: '20'})
        expect(spanAppliedDiscount.text()).toMatch(/^20%$/)
    })

    it('should render current price', () => {
        const {spanCurrentPrice} = setup({currentPrice: '10'})
        expect(spanCurrentPrice.text()).toMatch(/^10€$/)
    })

    it('should render number of sold units', () => {
        const {spanNumberOfSolds} = setup({numberOfSolds: '70'})
        expect(spanNumberOfSolds.text()).toMatch(/^70$/)
    })

    it('should render number of free units', () => {
        const {spanNumberOfFreeUnits} = setup({numberOfFreeUnits: '30'})
        expect(spanNumberOfFreeUnits.text()).toMatch(/^30$/)
    })
})