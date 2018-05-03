import React from 'react'
import {shallow} from 'enzyme'
import Good from './index';

const setup = props => {
    const component = shallow(
        <Good {...props} />
    )

    return {
        component: component
    }
}

describe('Good component', () => {
    it('should render all Good details', () => {
        const {component} = setup({
            good: {
                id: 1,
                productName: 'Patata',
                picture: 'Picture1',
                discountType: '%',
                discount: '20',
                category: 'Aliments',
                reusePeriod: '1',
                initialPrice: '50',
                pendingUnits: '3'
            },
            actions: {}
        })
        expect(component.find('.name').text()).toEqual('Patata')
        expect(component.find('.goodImg').props().src).toEqual('Picture1')
        expect(component.find('.appliedDiscount').text()).toEqual('20%')
        expect(component.find('.category').text()).toEqual('Aliments')
        expect(component.find('.reusePeriod').text()).toEqual('1 dies')
        expect(component.find('.originalPrice').text()).toEqual('50€')
        expect(component.find('.pendingUnits').text()).toEqual('3')
        expect(component.find('.currentPrice').text()).toEqual('40.00')
    })
})