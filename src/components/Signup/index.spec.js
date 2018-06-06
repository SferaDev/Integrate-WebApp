import React from 'react'
import {expect} from 'chai';
import {Maps} from "../Maps";
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from "./index";


enzyme.configure({adapter: new Adapter()});

describe('<SignUp />', () => {
    it('renders a <Maps /> components', () => {
        const wrapper = enzyme.shallow(<SignUp/>);
        expect(wrapper.find(Maps)).length(1);

    });


    it('should render a modal with an error message explaining that there are empty fields', () => {
        const wrapper = enzyme.shallow(<SignUp/>);
        const sendButton = wrapper.find('button').at(1);
        sendButton.simulate('click');
        /* Empty fields */
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("S'han d'omplir totes les dades del formulari.");
        expect(wrapper.state().modal).to.equal(true);

        /* addressName is missing */

        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '634384789'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({modal: false});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("S'han d'omplir totes les dades del formulari.");
        expect(wrapper.state().modal).to.equal(true);

        /* description is missing */


        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '634384789'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: ''});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        wrapper.setState({modal: false});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("S'han d'omplir totes les dades del formulari.");
        expect(wrapper.state().modal).to.equal(true);

        /* salesFirstName and salesLastName are missing */


        wrapper.setState({salesmanFirstName: ''});
        wrapper.setState({salesmanLastName: ''});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '634384789'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        wrapper.setState({modal: false});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("S'han d'omplir totes les dades del formulari.");
        expect(wrapper.state().modal).to.equal(true);

    });

    it('should render a modal with an error message explaining that the phone number is incorrect', () => {
        const wrapper = enzyme.shallow(<SignUp/>);
        const sendButton = wrapper.find('button').at(1);

        /*it has a character*/
        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '62864208p'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El telèfon introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

        /*Only 8 numbers*/
        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '62864208'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        wrapper.setState({modal: false});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El telèfon introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

    });

    it('should render a modal with an error message explaining that the email is incorrect', () => {
        const wrapper = enzyme.shallow(<SignUp/>);
        const sendButton = wrapper.find('button').at(1);

        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmailom'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("L'email introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);


        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalezgmail.com'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        wrapper.setState({modal: false});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("L'email introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

    });

    it('should render a modal with an error message explaining that the nif is incorrect', () => {
        const wrapper = enzyme.shallow(<SignUp/>);
        const sendButton = wrapper.find('button').at(1);

        /*it has only 6 numbers*/

        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '123456g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El nif introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

        /*it doesn't have a character*/
        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '123456789'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        wrapper.setState({modal: false});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El nif introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);

    });

   it('should render a modal with a message explaining the data is correct', () => {
        const wrapper = enzyme.shallow(<SignUp/>);
        const sendButton = wrapper.find('button').at(1);

        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("Les dades introduïdes són correctes.");
        expect(wrapper.state().modal).to.equal(true);

        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '12345678g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        wrapper.setState({modal: false});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("Les dades introduïdes són correctes.");
        expect(wrapper.state().modal).to.equal(true);

    });


});