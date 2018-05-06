import React, {Component} from 'react';
import './style.css';
import {Maps} from "../Maps";
import {apiPostSignUp} from "../../api/signup";
import {FormGroup, Modal, FormText, Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salesmanFirstName: '',
            salesmanLastName: '',
            nif: '',
            email: '',
            phone: '',
            description: '',
            name: '',
            addressName: '',
            addressLatitude: '',
            addressLongitude: '',
            modal: false,
            modalHeader: '',
            modalContent: ''
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeNif = this.changeNif.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeNameEntity = this.changeNameEntity.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSentClicked = this.onSentClicked.bind(this);
        this.onCloseClicked = this.onCloseClicked.bind(this);
        this.onUserSearched = this.onUserSearched.bind(this);
        this.checkEmptyInputs = this.checkEmptyInputs.bind(this);
        this.checkPhone = this.checkPhone.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkNIF = this.checkNIF.bind(this);
        this.onAcceptClicked = this.onAcceptClicked.bind(this)
    }


    changeFirstName(event) {
        this.setState({salesmanFirstName: event.target.value});
    }

    changeLastName(event) {
        this.setState({salesmanLastName: event.target.value});
    }

    changeNif(event) {
        this.setState({nif: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changeNameEntity(event) {
        this.setState({name: event.target.value});
    }

    changePhone(event) {
        this.setState({phone: event.target.value});
    }

    changeDescription(event) {
        this.setState({description: event.target.value});
    }

    checkEmail() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }

    checkPhone() {
        let i;
        let count = 0;
        for (i = 0; i < this.state.phone.length; i++) {
            if (this.state.phone[i] >= 0 && this.state.phone[i] <= 9) ++count;
        }
        return (count === 9 && this.state.phone.length === 9);
    }

    checkNIF() {
        let nif = this.state.nif.substring(0, this.state.nif.length - 1);
        let letra = this.state.nif.charAt(this.state.nif.length - 1);
        if (!isNaN(letra)) {
            return false;
        } else {
            let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
            let posicion = nif % 23;
            letra = cadena.substring(posicion, posicion + 1);
            let i;
            let count = 0;
            for (i = 0; i < this.state.phone.length; i++) {
                if (this.state.nif[i] >= 0 && this.state.nif[i] <= 9) ++count;
            }
            if (letra !== letra.toUpperCase() || (nif.length !== 8 || count !== 8)) {
                return false;
            }
        }
        return true;
    }

    checkEmptyInputs() {
        return (this.state.salesmanFirstName.length === 0 || this.state.salesmanLastName.length === 0 || this.state.email.length === 0 || this.state.nif.length === 0 || this.state.name.length === 0 || this.state.addressName.length === 0 || this.state.description.length === 0 || this.state.phone.length === 0);
    }

    onSentClicked(event) {
        this.setState({
            modal: !this.state.modal
        });
        if (this.checkEmptyInputs()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "S'han d'omplir totes les dades del formulari."});
        }

        else if (!this.checkEmail()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "L'email introduït no és correcte."});
        }

        else if (!this.checkPhone()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "El telèfon introduït no és correcte."});
        }

        else if (!this.checkNIF()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "El nif introduït no és correcte."});
        }

        else {
            this.setState({modalHeader: "Correcte"});
            this.setState({modalContent: "Les dades introduïdes són correctes."});

            //const {history} = this.props;
            //history.push('/');

        }
    }

    onCloseClicked(event) {
        event.preventDefault();
        const {history} = this.props;
        history.push('/login');
    }

    onAcceptClicked(event) {
        if (this.state.modalHeader === "Error") {
            !this.setState({
                modal: !this.state.modal
            });
        }
        else {
            const entity = {
                salesmanFirstName: this.state.salesmanFirstName,
                salesmanLastName: this.state.salesmanLastName,
                nif: this.state.nif,
                email: this.state.email,
                phone: this.state.phone,
                description: this.state.description,
                name: this.state.name,
                addressName: this.state.addressName,
                picture: "picture",
                coordinates: [this.state.addressLongitude, this.state.addressLatitude]
            }
            const coordinates = [this.state.addressLongitude, this.state.addressLatitude]
            apiPostSignUp(entity)
            console.log(entity)
            event.preventDefault();
            const {history} = this.props;
            history.push('/login');


        }
    }


    onUserSearched(address, lat, lng) {
        this.setState({addressName: address});
        this.setState({addressLatitude: lat});
        this.setState({addressLongitude: lng});


    }


    render() {

        return (
            <div className="Fons row">
                <div className="Form col-md-6">
                    <h1 className="HeaderForm">Formulari de sol·licitud</h1>
                    <button className="closeButton" onClick={this.onCloseClicked}><h3>×</h3></button>
                    <hr className="MainLine"/>
                    <FormGroup className="FirstFormGroup">
                        <input type="text" className="FirstNameText" placeholder="Nom *"
                               value={this.state.salesmanFirstName} onChange={this.changeFirstName}/>
                    </FormGroup>
                    <FormGroup className="SecondFormGroup">
                        <input type="text" className="SecondNameText" placeholder="Cognoms *"
                               value={this.state.salesmanLastName} onChange={this.changeLastName}/>
                    </FormGroup>
                    <FormGroup className="EmailForm">
                        <input type="email" className="EmailNameText" placeholder="Email *" value={this.state.email}
                               onChange={this.changeEmail}/>
                        <FormText>email@example.com</FormText>
                    </FormGroup>
                    <FormGroup className="NumberForm">
                        <input type="text" className="NumberText" placeholder="Telèfon *" value={this.state.phone}
                               onChange={this.changePhone}/>

                    </FormGroup>
                    <FormGroup className="EntityForm">
                        <input type="text" className="EmailNameText" placeholder="Nom de l'entitat *"
                               value={this.state.name}
                               onChange={this.changeNameEntity}/>
                    </FormGroup>
                    <FormGroup className="NifForm">
                        <input type="text" className="NumberText" placeholder="NIF *"
                               value={this.state.nif}
                               onChange={this.changeNif}/>
                        <FormText>Ex. format: 60250886G</FormText>
                    </FormGroup>
                    <FormGroup className="DescriptionForm">
                        <textarea type="text" className="DescriptionText" placeholder="Descripció de l'entitat *"
                                  value={this.state.description} onChange={this.changeDescription}/>
                    </FormGroup>
                    <FormGroup className="AddressForm">
                        <input id="addressId" type="text" className="TextForm" placeholder="Direcció de l'entitat *"
                               value={this.state.addressName} readOnly/>
                        <FormText>Escriu l'adreça en el buscador del mapa</FormText>
                    </FormGroup>
                    <FormGroup align="center">
                        <button className="Button" onClick={this.onSentClicked}>
                            Enviar
                        </button>
                    </FormGroup>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.onSentClicked} className={this.props.className}>
                    <ModalHeader toggle={this.onSentClicked}>{this.state.modalHeader}</ModalHeader>
                    <ModalBody>
                        {this.state.modalContent}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onAcceptClicked}>Acceptar</Button>{' '}
                    </ModalFooter>
                </Modal>
                <div className="Map col-sm-6">
                    <Maps onUserSearched={this.onUserSearched}/>
                </div>
            </div>

        );
    }

}
