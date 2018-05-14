import React from 'react';
import './style.css';
import {FormGroup, Modal, FormText, Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {apiPostPasswordRecovery} from '../../api/passwordrecovery'



export default class PasswordRecovery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nif: '',
            modal: false,
            modalHeader: '',
            modalContent: ''
        }

        this.changeNif = this.changeNif.bind(this)
        this.checkNIF = this.checkNIF.bind(this)
        this.onAcceptButton = this.onAcceptButton.bind(this)
        this.onCancelButton = this.onCancelButton.bind(this)
        this.onAcceptModalButton = this.onAcceptModalButton.bind(this)
    }

    changeNif(event) {
        this.setState({nif: event.target.value});
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
            for (i = 0; i < this.state.nif.length; i++) {
                if (this.state.nif[i] >= 0 && this.state.nif[i] <= 9) ++count;
            }
            if (letra !== letra.toUpperCase() || (nif.length !== 8 || count !== 8)) {
                return false;
            }
        }
        return true;
    }

    onAcceptButton(event) {
        this.setState({
            modal: !this.state.modal
        });

        if (!this.checkNIF()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "El nif introduït no és correcte."});
        }

        else {
            this.setState({modalHeader: "Correcte"});
            this.setState({modalContent: "S'ha enviat una nova contrasenya correctament."});
        }

    }

    onCancelButton(event) {
        event.preventDefault()
        const {history} = this.props
        history.push('/')
    }

    onAcceptModalButton(event) {
        if (this.state.modalHeader === "Error") {
            this.setState({
                modal: !this.state.modal
            });
        }
        else {
            apiPostPasswordRecovery(this.state.nif)
            event.preventDefault()
            const {history} = this.props
            history.push('/login')
        }

    }


    render() {
        return (
            <div className="MainDiv">
                <h1 className="HeaderForm">Recuperació de la constrasenya</h1>
                <hr className="MainLine"/>
                <p className="Info">Introdueix el nif on rebràs una nova contrasenya al correu que vas utilitzar per registrar-te:</p>
                <FormGroup className="EmailForm">
                    <input type="email" className="EmailNameText" placeholder="Nif *" value={this.state.nif}
                           onChange={this.changeNif}/>
                    <FormText>Ex. format: 60250886G</FormText>
                </FormGroup>
                <ModalFooter className="ButtonsForm">
                    <Button color="primary" onClick={this.onAcceptButton}>Acceptar</Button>{' '}
                    <Button color="secondary" onClick={this.onCancelButton}>Cancel·lar</Button>
                </ModalFooter>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.state.modalHeader}</ModalHeader>
                    <ModalBody>
                        {this.state.modalContent}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onAcceptModalButton}>Acceptar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}