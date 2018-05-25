import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChangePassword from "./index";

enzyme.configure({adapter: new Adapter()});

describe('<ChangePassword />', () => {


    it('should render a modal with an error message explaining the current password is incorrect', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        const accept = wrapper.find('Button').at(0);
        accept.simulate('click');
        /* Empty fields */
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("La nova contrasenya no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'qwertyuio1'});
        wrapper.setState({newPassword2: 'qwertyuio1'});
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("La nova contrasenya no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

    });

});