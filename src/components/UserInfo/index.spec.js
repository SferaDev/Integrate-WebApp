import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInfo from "./index";


enzyme.configure({adapter: new Adapter()});

describe('<UserInfo />', () => {
    it('it has a div with an image', () => {
        const wrapper = enzyme.shallow(<UserInfo/>);
        expect(wrapper.find('div')).length(1);
        expect(wrapper.find('img')).length(1);

    });
});