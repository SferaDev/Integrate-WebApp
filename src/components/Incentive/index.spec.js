import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Incentive from "./index";

enzyme.configure({adapter: new Adapter()});

describe('<Incentive />', () => {


    it('should have 3 FormattedMessage components', () => {
        const wrapper = enzyme.shallow(<Incentive/>);
        expect(wrapper.find('FormattedMessage')).length(3);

    });

    it('should have 3 header components', () => {
        const wrapper = enzyme.shallow(<Incentive/>);
        expect(wrapper.find('h3')).length(3);

    });

    it('should have 3 image components', () => {
        const wrapper = enzyme.shallow(<Incentive/>);
        expect(wrapper.find('img')).length(3);

    });




});