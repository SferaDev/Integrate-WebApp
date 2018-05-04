import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai';
import {PasswordRecovery} from './index';

describe('<PasswordRecovery />', () => {


    it('should render a modal with an error message explaining that the email is incorrect', () => {
        const wrapper = shallow(<PasswordRecovery/>);
        const acceptButton = wrapper.find('Button').at(0);
        acceptButton.simulate('click');
        /* Empty field */
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("L'email introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);


        wrapper.setState({email: 'paugonzalez@gmailom'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("L'email introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

        wrapper.setState({email: 'paugonzalezgmail.com'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("L'email introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);
    });

    it('should render a modal with a message explaining the email is correct', () => {
        const wrapper = shallow(<PasswordRecovery/>);
        const acceptButton = wrapper.find('Button').at(0);
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha enviat una nova contrasenya al e-mail: paugonzalez@gmail.com");
        expect(wrapper.state().modal).to.equal(true);

        wrapper.setState({email: 'pau@gmail.com'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha enviat una nova contrasenya al e-mail: pau@gmail.com");
        expect(wrapper.state().modal).to.equal(true);

    })
})