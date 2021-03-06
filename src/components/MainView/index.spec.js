import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainView from "./";


enzyme.configure({adapter: new Adapter()});

describe('MainView', () => {
    const mockActions = {}

    it('renders a nav bar components', () => {
        const wrapper = enzyme.shallow(<MainView actions={mockActions}/>);
        expect(wrapper.find('NavbarBrand')).length(1);
        expect(wrapper.find('Navbar')).length(1);
        expect(wrapper.find('NavItem')).length(3);
        expect(wrapper.find('NavLink')).length(3);

        expect(wrapper.state().isOpen).to.equal(false);



    })

    it('toggle component', () => {
        const wrapper = enzyme.shallow(<MainView actions={mockActions}/>);
        wrapper.instance().toggle();
        expect(wrapper.state().isOpen).to.equal(true);




    })
})