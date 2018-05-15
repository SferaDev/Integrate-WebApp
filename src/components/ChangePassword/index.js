import React from 'react';
import './style.css';
import {FormGroup, Modal, FormText, Button, ModalHeader, ModalBody, ModalFooter, Input, Col, Label} from 'reactstrap';
import {FormattedMessage} from 'react-intl';
import {IntlProvider} from 'react-intl';
import messages from "../../constants/messages";


export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actualPassword: '',
            newPassword: '',
            newPassword2: ''
        }

        this.changeActualPassword = this.changeActualPassword.bind(this)
        this.changeNewPassword = this.changeNewPassword.bind(this)
        this.changeNewPassword2 = this.changeNewPassword2.bind(this)
        this.onAcceptButton = this.onAcceptButton.bind(this)
        this.onCancelButton = this.onCancelButton.bind(this)


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

    onAcceptButton(event) {
        event.preventDefault();
        const {history} = this.props;
        history.push('/login');
    }

    onCancelButton(event) {
        event.preventDefault();
        const {history} = this.props;
        history.push('/login');

    }



    render() {
        let lang = "es";
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div className="MainDiv">
                    <h1 className="HeaderForm">
                        <FormattedMessage id='password.header' defaultMessage='Canvi de contrasenya:'/>
                    </h1>
                    <hr className="MainLine"/>
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
                            <FormattedMessage id='modal.accept' defaultMessage='Acceptar:'/>
                        </Button>{' '}
                        <Button color="secondary" onClick={this.onCancelButton}>
                            <FormattedMessage id='modal.cancel' defaultMessage='Cancel·lar:'/>
                        </Button>
                    </ModalFooter>

                </div>
            </IntlProvider>
        );
    }
}