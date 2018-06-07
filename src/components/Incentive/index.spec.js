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
    it('should render all Incentive details', () => {
        const {component} = setup({
            incentives: {
                goodsCreated: 1,
                beneficiariesHelped: 1,
                totalSavedMoney: 1.00,
            }
        });
        expect(component.find('.medalLeftHidden').props().src).toEqual(undefined);
        expect(component.find('.medalMiddleHidden').props().src).toEqual(undefined);
        expect(component.find('.medalRightHidden').props().src).toEqual(undefined);
        expect(component.find('.leftTextValue').text()).toEqual('1');
    })
})