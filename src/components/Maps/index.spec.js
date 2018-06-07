import React from 'react'
import {expect} from 'chai';
import {Maps} from "./index";
import {MyMapComponent} from "./index";
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({adapter: new Adapter()});

describe('<Maps />', () => {
    it('has a MyMapComponent', () => {
        const wrapper = enzyme.shallow(<Maps/>);
        expect(wrapper.find(MyMapComponent)).length(1);
    });

    it('shows correctly the marker', () => {
        const wrapper = enzyme.shallow(<Maps/>);

        wrapper.instance().handleMarkerClick();
        expect(wrapper.state().isMarkerShown).to.equal(false);
    });


});
