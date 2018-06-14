import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChangePassword from "./index";
import {Maps} from "../Maps";
enzyme.configure({adapter: new Adapter()});


let wrapper;
let instance;
describe('<ChangePassword />', () => {

    beforeAll(() => {
        global.lang = 'ca';
    })

    beforeEach(function () {
        wrapper = enzyme.shallow(<ChangePassword/>);
        instance = wrapper.instance();
    });

    afterEach(function () {
        wrapper = null;
        instance = null;
    });

    it('onAcceptButton() is callable and returns nothing', () => {
        expect(instance.onAcceptButton()).to.equal(undefined);
    });

    it('change correctly the passwords', () => {
        const actualPassword = {
            target : {
                value : 'aaa'
            }
        };
        const newPassword = {
            target : {
                value : 'bbb'
            }
        };
        const newPassword2 = {
            target : {
                value : 'bbb'
            }
        };

        instance.changeActualPassword(actualPassword);
        instance.changeNewPassword(newPassword);
        instance.changeNewPassword2(newPassword2);
        expect(wrapper.state().actualPassword).to.equal('aaa');
        expect(wrapper.state().newPassword).to.equal('bbb');
        expect(wrapper.state().newPassword2).to.equal('bbb');

    });

    it('onAcceptButton() is callable and returns nothing', () => {
        const accept = wrapper.find('Button').at(0);
        accept.simulate('click');
        instance.state.newPassword = 'A';
        instance.state.newPassword2 = 'A';
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("La nova contrasenya no és correcte.");
        expect(wrapper.state().modal).to.equal(true);
        expect(instance.onAcceptButton()).to.equal(undefined);
    });



    it('should render a modal with an error message explaining the new password is incorrect', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        const accept = wrapper.find('Button').at(0);
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("La nova contrasenya no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

        wrapper.setState({modal: false});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'qwertyuio'});
        wrapper.setState({newPassword2: 'qwertyuio'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("La nova contrasenya no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

    });


    it('should render a modal with an error message explaining the new passwords are not equal', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        const accept = wrapper.find('Button').at(0);
        const acceptModalButton = wrapper.find('Button').at(2);

        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'qwertyuio1'});
        wrapper.setState({newPassword2: 'qwertyuio'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("Les contrasenyes noves no són iguals.");
        expect(wrapper.state().modal).to.equal(true);
        acceptModalButton.simulate('click');
        expect(wrapper.state().modal).to.equal(false);



        wrapper.setState({modal: false});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'holaquetal23'});
        wrapper.setState({newPassword2: 'qwertyuio'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("Les contrasenyes noves no són iguals.");
        expect(wrapper.state().modal).to.equal(true);

    });

    it('should render a modal with an error message explaining that the password has been changed', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        const accept = wrapper.find('Button').at(0);
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'qwertyuio1'});
        wrapper.setState({newPassword2: 'qwertyuio1'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha canviat correctament la constrasenya.");
        expect(wrapper.state().modal).to.equal(true);

        wrapper.setState({modal: false});
        wrapper.setState({currentPassword: 'jkdakdjf'});
        wrapper.setState({newPassword: 'holaquetal23'});
        wrapper.setState({newPassword2: 'holaquetal23'});
        accept.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("S'ha canviat correctament la constrasenya.");
        expect(wrapper.state().modal).to.equal(true);

    });

    it('renders a <Modal /> components', () => {
        const wrapper = enzyme.shallow(<ChangePassword/>);
        expect(wrapper.find('Modal')).length(1);

    });

});