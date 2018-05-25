import React from 'react';
import './style.css';
import {FormGroup, Modal, FormText, Button, ModalHeader, ModalBody, ModalFooter, Input, Col, Label} from 'reactstrap';
import {FormattedMessage} from 'react-intl';
import {apiPutChangePassword} from "../../api/changepassword";




export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualPassword: '',
            newPassword: '',
            newPassword2: '',
            modal: false,
            modalContent: '',
            modalHeader: '',
            idHeader: '',
            idContent: ''
        };

        this.changeActualPassword = this.changeActualPassword.bind(this);
        this.changeNewPassword = this.changeNewPassword.bind(this);
        this.changeNewPassword2 = this.changeNewPassword2.bind(this);
        this.onAcceptButton = this.onAcceptButton.bind(this);
        this.onCancelButton = this.onCancelButton.bind(this);
        this.checkFormatNewPassword = this.checkFormatNewPassword.bind(this);
        this.hasNumber = this.hasNumber.bind(this);
        this.checkNewPasswords = this.checkNewPasswords.bind(this);
        this.onModalAcceptClicked = this.onModalAcceptClicked.bind(this);


    }

    changeActualPassword(event) {
        this.setState({actualPassword: event.target.value});
    }

    changeNewPassword(event) {
        this.setState({newPassword: event.target.value});
    }

    changeNewPassword2(event) {
        this.setState({newPassword2: event.target.value});
    }


    hasNumber() {
        return /\d/.test(this.state.newPassword);
    }

    checkFormatNewPassword() {

        if (this.state.newPassword.length < 8) return false;
        else return this.hasNumber();

    }

    checkNewPasswords() {
        return (this.state.newPassword === this.state.newPassword2);
    }

    onAcceptButton() {
        this.setState({
            modal: !this.state.modal
        });

        if (!this.checkFormatNewPassword()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "La nova contrasenya no és correcte."});
            this.setState({idHeader: 'modalpass.header'});
            this.setState({idContent: 'modalpass.newpassword'});
        }

        else if (!this.checkNewPasswords()) {
            this.setState({modalHeader: "Error"});
            this.setState({modalContent: "Les contrasenyes noves no són iguals."});
            this.setState({idHeader: 'modalpass.header'});
            this.setState({idContent: 'modalpass.equal'});
        }

        else {
            const oldPassword = this.state.actualPassword;
            const newPassword = this.state.newPassword;
            let error = 0;

            apiPutChangePassword(oldPassword,newPassword).then(response => {
                if (response.message === "Invalid old password") {
                    this.setState({modalHeader: "Error"});
                    this.setState({modalContent: "La contrasenya actual no és correcte."});
                    this.setState({idHeader: 'modalpass.header'});
                    this.setState({idContent: 'modalpass.currentpassword'});
                    error = 1;
                }
            })

            if (error === 0) {
                this.setState({modalHeader: "Correcte"});
                this.setState({modalContent: "S'ha canviat correctament la constrasenya."});
                this.setState({idHeader: 'modalpass.correct'});
                this.setState({idContent: 'modalpass.success'});
            }

        }

    }

    onModalAcceptClicked(event) {
        if (this.state.modalHeader === "Error") {
            this.setState({
                modal: !this.state.modal
            });
        }
        else {
            event.preventDefault();
            this.props.history.push("/main");
        }
    }

    onCancelButton(event) {
        event.preventDefault();

        this.props.history.push('/main')
    }



    render() {
        return (
            <div className="Div">
                <h1 className="Header">
                    <FormattedMessage id='password.header' defaultMessage='Canvi de contrasenya:'/>
                </h1>
                <hr className="Line"/>
                <FormGroup row>
                    <Label className="PasswordForm" for="ActualPassword" sm={2}>
                        <FormattedMessage id='password.current' defaultMessage='Contrasenya actual:'/>
                    </Label>
                    <Col sm={8}>
                        <Input id= "ActualPassword" type="password" name="ActualPassword" value={this.state.actualPassword} onChange={this.changeActualPassword}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="PasswordForm" for="NewPassword" sm={2}>
                        <FormattedMessage id='password.new' defaultMessage='Nova contrasenya:'/>
                    </Label>
                    <Col sm={8}>
                        <Input id= "NewPassword" type="password" name="NewPassword" value={this.state.newPassword} onChange={this.changeNewPassword}/>
                        <FormText>
                            <FormattedMessage id='password.info' defaultMessage='Mínim 8 caràcters i almenys un número.'/>
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup  row>
                    <Label className="PasswordForm" for="NewPassword2" sm={2}>
                        <FormattedMessage id='password.new2' defaultMessage='Reescriu la nova contrasenya:'/>
                    </Label>
                    <Col sm={8}>
                        <Input id= "NewPassword2" type="password" name="NewPassword2" value={this.state.newPassword2} onChange={this.changeNewPassword2}/>
                    </Col>
                </FormGroup>
                <ModalFooter className="ButtonsForm">
                    <Button color="primary" onClick={this.onAcceptButton}>
                        <FormattedMessage id='modalpass.accept' defaultMessage='Acceptar:'/>
                    </Button>{' '}
                    <Button color="secondary" onClick={this.onCancelButton}>
                        <FormattedMessage id='modalpass.cancel' defaultMessage='Cancel·lar:'/>
                    </Button>
                </ModalFooter>
                <Modal isOpen={this.state.modal} toggle={this.onAcceptButton} className={this.props.className}>
                    <ModalHeader toggle={this.onAcceptButton}>
                        <FormattedMessage id={this.state.idHeader} defaultMessage={this.state.modalHeader}/>
                    </ModalHeader>
                    <ModalBody>
                        <FormattedMessage id={this.state.idContent} defaultMessage={this.state.modalContent}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onModalAcceptClicked}>
                            <FormattedMessage id='modalpass.button' defaultMessage='Acceptar'/>
                        </Button>{' '}
                    </ModalFooter>
                </Modal>

            </div>
        );
    }


}


