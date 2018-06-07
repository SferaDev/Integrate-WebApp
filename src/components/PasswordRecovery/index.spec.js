import React from 'react'
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import {expect} from 'chai';
import PasswordRecovery from './index';


describe('<PasswordRecovery />', () => {

    it('handle correctly the inputs', () => {
        const wrapper = enzyme.shallow(<PasswordRecovery/>);
        const nif = {
            target : {
                value : '60150786g'
            }
        };
        wrapper.instance().changeNif(nif);
        expect(wrapper.state().nif).to.equal('60150786g');


    });

    it('should render a modal with an error message explaining that the nif is incorrect', () => {
        const wrapper = enzyme.shallow(<PasswordRecovery/>);
        const acceptButton = wrapper.find('Button').at(0);
        const acceptModalButton = wrapper.find('Button').at(2);
        acceptButton.simulate('click');

        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El nif introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);
        acceptModalButton.simulate('click');
        expect(wrapper.state().modal).to.equal(false);

        wrapper.setState({nif: '1234567'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El nif introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);
        acceptModalButton.simulate('click');
        expect(wrapper.state().modal).to.equal(false);

        wrapper.setState({nif: '1234567a'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El nif introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);
        acceptModalButton.simulate('click');
        expect(wrapper.state().modal).to.equal(false);
    });

   it('should render a modal with a message explaining the nif is correct', () => {
        const wrapper = enzyme.shallow(<PasswordRecovery/>);
        const acceptButton = wrapper.find('Button').at(0);
        wrapper.setState({nif: '60150786g'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha enviat una nova contrasenya correctament.");
        expect(wrapper.state().modal).to.equal(true);


        wrapper.setState({nif: '12345678s'});
        wrapper.setState({modal: false});
        acceptButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha enviat una nova contrasenya correctament.");
        expect(wrapper.state().modal).to.equal(true);
    })

})
