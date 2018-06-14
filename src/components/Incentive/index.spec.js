import React from 'react'
import Incentive from './index';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({adapter: new Adapter()});
jest.mock('../../api/incentive')

const setup = props => {
    const component = enzyme.shallow(
        <Incentive {...props}/>
    );

    return {
        component: component
    }
};

describe('Incentive component', () => {
    it('should render Incentive details when entity has no medals', () => {
        const {component} = setup({
            incentives: {
                goodsCreated: 1,
                beneficiariesHelped: 1,
                totalSavedMoney: 1.00,
            }
        });
        expect(component.find('.leftTextValue').text()).toEqual('1');
        expect(component.find('.middleTextValue').text()).toEqual('1');
        expect(component.find('.rightTextValue').text()).toEqual('1');
    })

    it('should render Incentive details when entity has bronze medals', () => {
        const {component} = setup({
            incentives: {
                goodsCreated: 5,
                beneficiariesHelped: 5,
                totalSavedMoney: 5.55,
            }
        });
        expect(component.find('.medalLeft').props().src).toEqual('bronzemedal.png');
        expect(component.find('.medalMiddle').props().src).toEqual('bronzemedal.png');
        expect(component.find('.medalRight').props().src).toEqual('bronzemedal.png');
        expect(component.find('.leftTextValue').text()).toEqual('5');
        expect(component.find('.middleTextValue').text()).toEqual('5');
        expect(component.find('.rightTextValue').text()).toEqual('5.55');
    })

    it('should render Incentive details when entity has silver medals', () => {
        const {component} = setup({
            incentives: {
                goodsCreated: 50,
                beneficiariesHelped: 50,
                totalSavedMoney: 50,
            }
        });
        expect(component.find('.medalLeft').props().src).toEqual('silvermedal.jpeg');
        expect(component.find('.medalMiddle').props().src).toEqual('silvermedal.jpeg');
        expect(component.find('.medalRight').props().src).toEqual('silvermedal.jpeg');
        expect(component.find('.leftTextValue').text()).toEqual('50');
        expect(component.find('.middleTextValue').text()).toEqual('50');
        expect(component.find('.rightTextValue').text()).toEqual('50');
    })

    it('should render Incentive details when entity has golden medals', () => {
        const {component} = setup({
            incentives: {
                goodsCreated: 1000,
                beneficiariesHelped: 1000,
                totalSavedMoney: 1000,
            }
        });
        expect(component.find('.medalLeft').props().src).toEqual('goldmedal.jpeg');
        expect(component.find('.medalMiddle').props().src).toEqual('goldmedal.jpeg');
        expect(component.find('.medalRight').props().src).toEqual('goldmedal.jpeg');
        expect(component.find('.leftTextValue').text()).toEqual('1000');
        expect(component.find('.middleTextValue').text()).toEqual('1000');
        expect(component.find('.rightTextValue').text()).toEqual('1000');
    })
})