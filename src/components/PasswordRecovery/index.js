import React from 'react';
import './style.css';
import {FormGroup, Modal, FormText, Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export class PasswordRecovery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            modal: false,
            modalHeader: '',
            modalContent: ''
        }

        this.changeEmail = this.changeEmail.bind(this)
        this.checkEmail = this.checkEmail.bind(this)
        this.onAcceptButton = this.onAcceptButton.bind(this)
        this.onCancelButton = this.onCancelButton.bind(this)
        this.onAcceptModalButton = this.onAcceptModalButton.bind(this)
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    checkEmail() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }

    onAcceptButton(event) {
        this.setState({
            modal: !this.state.modal
        });

        if (!this.checkEmail()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "L'email introduït no és correcte."});
        }

        else {
            this.setState({modalHeader: "Correcte"});
            this.setState({modalContent: "S'ha enviat una nova contrasenya al e-mail: " + this.state.email});
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
            event.preventDefault()
            const {history} = this.props
            history.push('/')
        }

    }


    render() {
        return (
            <div className="MainDiv">
                <h1 className="HeaderForm">Recuperacio de la constrasenya</h1>
                <hr className="MainLine"/>
                <p className="Info">Introdueix el teu e-mail on rebràs una nova contrasenya:</p>
                <FormGroup className="EmailForm">
                    <input type="email" className="EmailNameText" placeholder="Email *" value={this.state.email}
                           onChange={this.changeEmail}/>
                    <FormText>email@example.com</FormText>
                </FormGroup>
                <ModalFooter>
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