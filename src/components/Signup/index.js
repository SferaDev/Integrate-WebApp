import React, {Component} from 'react';
import './style.css';
import {Maps} from "../Maps";
import {apiPostSignUp} from "../../api/signup";
import {Button, FormGroup, FormText, Modal, ModalBody, ModalFooter, ModalHeader, Label, Input, Col} from 'reactstrap';
import {FormattedMessage} from 'react-intl';
import {cloudinaryUploadImg} from "../../api/cloudinary";


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
            picture: '',
            addressLatitude: '',
            addressLongitude: '',
            modal: false,
            modalHeader: '',
            modalContent: '',
            idHeader: '',
            idContent: ''
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeNif = this.changeNif.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeNameEntity = this.changeNameEntity.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changePicture = this.changePicture.bind(this);
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
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    changePicture() {
        const file = document.getElementById('pictureFile').files[0];
        const imgPreview = document.getElementById('picturePreview');

        cloudinaryUploadImg({file})
            .then(resultUrl => {
                imgPreview.src = resultUrl;
                this.setState({picture: resultUrl})
            })

    }

    checkEmptyInputs() {
        return (this.state.salesmanFirstName.length === 0 || this.state.salesmanLastName.length === 0 || this.state.email.length === 0 || this.state.nif.length === 0 || this.state.name.length === 0 || this.state.addressName.length === 0 || this.state.description.length === 0 || this.state.phone.length === 0 || this.state.picture.length === 0);
    }

    onSentClicked() {
        this.setState({
            modal: !this.state.modal
        });
        if (this.checkEmptyInputs()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "S'han d'omplir totes les dades del formulari."});
            this.setState({idHeader: 'modal.error'});
            this.setState({idContent: 'modal.empty'});
        }

        else if (!this.checkEmail()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "L'email introduït no és correcte."});
            this.setState({idHeader: 'modal.error'});
            this.setState({idContent: 'modal.email'});
        }

        else if (!this.checkPhone()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "El telèfon introduït no és correcte."});
            this.setState({idHeader: 'modal.error'});
            this.setState({idContent: 'modal.phone'});
        }

        else if (!this.checkNIF()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "El nif introduït no és correcte."});
            this.setState({idHeader: 'modal.error'});
            this.setState({idContent: 'modal.nif'});
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
                picture: this.state.picture,
                coordinates: [this.state.addressLongitude, this.state.addressLatitude]
            };
            let exists = 0;
            apiPostSignUp(entity).catch(error => {
                if (error === 'Nif or email already exists.') {
                    this.setState({modalHeader: "Error"});
                    this.setState({modalContent: "El nif o l'email ja existeixen."});
                    this.setState({idHeader: 'modal.error'});
                    this.setState({idContent: 'modal.exist'});
                    exists = 1;
                }
            });
            if (exists === 0) {
                this.setState({modalHeader: "Correcte"});
                this.setState({modalContent: "Les dades introduïdes són correctes."});
                this.setState({idHeader: 'modal.header'});
                this.setState({idContent: 'modal.correct'});
            }

        }


    }

    onCloseClicked() {
        this.props.history.push('/')

    }

    onAcceptClicked() {
        if (this.state.modalHeader === "Error") {
            this.setState({
                modal: !this.state.modal
            });
        }
        else {
            this.props.history.push('/')
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
                    <h1 className="HeaderForm">
                        <FormattedMessage id='entity.header' defaultMessage='Formulari de sol·licitud'/>
                    </h1>
                    <button className="closeButton" onClick={this.onCloseClicked}><h3>×</h3></button>
                    <hr className="MainLine"/>
                    <FormGroup row>
                        <Label for="FirstName" sm={2}>
                            <FormattedMessage id='entity.firstname' defaultMessage='Nom:'/>
                        </Label>
                        <Col sm={3}>
                            <Input id= "FirstName" type="text" name="FirstName" value={this.state.salesmanFirstName} onChange={this.changeFirstName}/>
                        </Col>
                        <Label for="Surname" sm={2}>
                            <FormattedMessage id='entity.surname' defaultMessage='Cognoms:'/>
                        </Label>
                        <Col sm={5}>
                            <Input id= "Surname" type="text" name="Surname" value={this.state.salesmanLastName} onChange={this.changeLastName}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Phone" sm={2}>
                            <FormattedMessage id='entity.phone' defaultMessage='Telèfon:'/>
                        </Label>
                        <Col sm={3}>
                            <Input id= "Phone" type="text" name="Phone" value={this.state.phone} onChange={this.changePhone}/>
                        </Col>
                        <Label for="Email" sm={1}>
                            <FormattedMessage id='entity.email' defaultMessage='Email:'/>
                        </Label>
                        <Col sm={6}>
                            <Input id= "Email" type="text" name="Email" value={this.state.email} onChange={this.changeEmail}/>
                            <FormText>email@example.com</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="EntityName" sm={2}>
                            <FormattedMessage id='entity.name' defaultMessage="Nom de l'entitat:"/>
                        </Label>
                        <Col sm={6}>
                            <Input id= "EntityName" type="text" name="EntityName" value={this.state.name} onChange={this.changeNameEntity}/>
                        </Col>
                        <Label for="Nif" sm={1}>
                            <FormattedMessage id='entity.nif' defaultMessage='Nif:'/>
                        </Label>
                        <Col sm={3}>
                            <Input id= "Nif" type="text" name="Nif" value={this.state.nif} onChange={this.changeNif}/>
                            <FormText>Ex.: 60250886G</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="EntityDescription" sm={2}>
                            <FormattedMessage id='entity.description' defaultMessage="Descripció de l'entitat:"/>
                        </Label>
                        <Col sm={10}>
                            <Input type="textarea"  id="EntityDescription"  value={this.state.description} onChange={this.changeDescription}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="addressId" sm={2}>
                            <FormattedMessage id='entity.address' defaultMessage="Direcció:"/>
                        </Label>
                        <Col sm={10}>
                            <Input type="text" id="addressId" value={this.state.addressName} readOnly/>
                            <FormText>
                                <FormattedMessage id='entity.addressinfo' defaultMessage="Escriu l'adreça en el buscador del mapa:"/>
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                            <Label for="pictureId" sm={2}>
                                <FormattedMessage id='entity.picture' defaultMessage="Foto de l'entitat:"/>
                            </Label>
                        <Col sm="5">
                            <Input type="file" className="file" id="pictureFile" onChange={this.changePicture}/>
                        </Col>
                        <Col sm={5}>
                            <img id="picturePreview" src={this.state.picture} alt=""/>

                        </Col>
                    </FormGroup>
                    <FormGroup align="center">
                        <button className="Button" onClick={this.onSentClicked}>
                            <FormattedMessage id='entity.send' defaultMessage="Enviar"/>
                        </button>
                    </FormGroup>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.onSentClicked} className={this.props.className}>
                    <ModalHeader toggle={this.onSentClicked}>
                        <FormattedMessage id={this.state.idHeader} defaultMessage={this.state.modalHeader}/>
                    </ModalHeader>
                    <ModalBody>
                        <FormattedMessage id={this.state.idContent} defaultMessage={this.state.modalContent}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onAcceptClicked}>
                            <FormattedMessage id='modal.button' defaultMessage="Acceptar"/>
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
                <div className="col-sm-6">
                    <Maps onUserSearched={this.onUserSearched}/>
                </div>
            </div>
        );
    }

}
