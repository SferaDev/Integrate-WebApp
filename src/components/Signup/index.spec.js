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

    it('handle correctly the inputs', () => {

        const salesmanFirstName = {
            target : {
                value : 'Pau'
            }
        };
        const salesmanLastName = {
            target : {
                value : 'Gonzalez'
            }
        };
        const nif = {
            target : {
                value : '60150786g'
            }
        };

        const email = {
            target : {
                value : 'pau@gmail.com'
            }
        };

        const phone = {
            target : {
                value : '123456789'
            }
        };

        const description = {
            target : {
                value : 'Venda aliments'
            }
        };

        const name = {
            target : {
                value : 'Mercadona'
            }
        };


        const wrapper = enzyme.shallow(<SignUp/>);

        wrapper.instance().changeFirstName(salesmanFirstName);
        wrapper.instance().changeLastName(salesmanLastName);
        wrapper.instance().changeNif(nif);
        wrapper.instance().changeEmail(email);
        wrapper.instance().changeNameEntity(name);
        wrapper.instance().changePhone(phone);
        wrapper.instance().changeDescription(description);

        expect(wrapper.state().salesmanFirstName).to.equal('Pau');
        expect(wrapper.state().salesmanLastName).to.equal('Gonzalez');
        expect(wrapper.state().nif).to.equal('60150786g');
        expect(wrapper.state().email).to.equal('pau@gmail.com');
        expect(wrapper.state().phone).to.equal('123456789');
        expect(wrapper.state().description).to.equal('Venda aliments');
        expect(wrapper.state().name).to.equal('Mercadona');


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
        wrapper.setState({picture: 'pafornet.png'});
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
        wrapper.setState({picture: 'pafornet.png'});
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
        wrapper.setState({picture: 'pafornet.png'});
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
        wrapper.setState({picture: 'pafornet.png'});
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
        wrapper.setState({picture: 'pafornet.png'});
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
        wrapper.setState({picture: 'pafornet.png'});
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
        const acceptButton = wrapper.find('Button').at(0);
        /*it has only 6 numbers*/

        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '123456g'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({picture: 'pafornet.png'});

        wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Error');
        expect(wrapper.state().modalContent).to.equal("El nif introduït no és correcte.");
        expect(wrapper.state().modal).to.equal(true);
        acceptButton.simulate('click');
        expect(wrapper.state().modal).to.equal(false);


        /*it doesn't have a character*/
        wrapper.setState({salesmanFirstName: 'Pau'});
        wrapper.setState({salesmanLastName: 'Gonzalez Montiel'});
        wrapper.setState({nif: '123456789'});
        wrapper.setState({email: 'paugonzalez@gmail.com'});
        wrapper.setState({phone: '628642082'});
        wrapper.setState({name: 'Pa el fornet'});
        wrapper.setState({picture: 'pafornet.png'});

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
       wrapper.setState({picture: 'pafornet.png'});
       wrapper.setState({description: 'Venda de pa'});
        wrapper.setState({addressName: 'Avinguda Diagonal, 633, 08028 Barcelona'});
        sendButton.simulate('click');
        expect(wrapper.state().modalHeader).to.equal('Correcte');
        expect(wrapper.state().modalContent).to.equal("Les dades introduïdes són correctes.");
        expect(wrapper.state().modal).to.equal(true);


    });

    it('have good coordenates', () => {
        const wrapper = enzyme.shallow(<SignUp/>);
        wrapper.instance().onUserSearched('Avinguda Diagonal, 633, 08028 Barcelona','41.32121','12,12312')
        expect(wrapper.state().addressName).to.equal('Avinguda Diagonal, 633, 08028 Barcelona');
        expect(wrapper.state().addressLatitude).to.equal('41.32121');
        expect(wrapper.state().addressLongitude).to.equal('12,12312');

    });


});