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


   /* it('should render a modal with an error message explaining the new password is incorrect', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        const accept = wrapper.find('Button').at(0);
        wrapper.setState({currentp: true});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'mcoo'});
        wrapper.setState({newPassword2: 'mcoo'});
        accept.simulate('click');

        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("La nova contrasenya no és correcte.");
        expect(wrapper.state().modal).to.equal(true);


        wrapper.setState({modal: false});
        wrapper.setState({currentp: true});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'qwertyuio'});
        wrapper.setState({newPassword2: 'qwertyuio'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("La nova contrasenya no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

    });*/

   /* it('should render a modal with an error message explaining the new passwords are not equal', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        const accept = wrapper.find('Button').at(0);
        wrapper.setState({currentp: true});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'holaquetal1'});
        wrapper.setState({newPassword2: 'holaquetal2'});
        accept.simulate('click');

        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("Les contrasenyes noves no són iguals.");
        expect(wrapper.state().modal).to.equal(true);


        wrapper.setState({modal: false});
        wrapper.setState({currentp: true});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'qwertyuiaao2'});
        wrapper.setState({newPassword2: 'qwertyuibao2'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("Les contrasenyes noves no són iguals.");
        expect(wrapper.state().modal).to.equal(true);

    });*/

    /*it('should render a modal with a message explaining that the password has been changed', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        const accept = wrapper.find('Button').at(0);
        wrapper.setState({currentp: true});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'holaquetal1'});
        wrapper.setState({newPassword2: 'holaquetal1'});
        accept.simulate('click');

        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha canviat correctament la constrasenya.");
        expect(wrapper.state().modal).to.equal(true);


        wrapper.setState({modal: false});
        wrapper.setState({currentp: true});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'qwertyuiaao2'});
        wrapper.setState({newPassword2: 'qwertyuiaao2'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha canviat correctament la constrasenya.");
        expect(wrapper.state().modal).to.equal(true);

    });*/
});