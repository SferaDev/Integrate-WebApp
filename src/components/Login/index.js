import React from 'react';
import logo from '../../media/icon2.png';
import {Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import './style.css';

export class Login extends React.Component {

    constructor(props) {
        super(props)
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this)
        this.onRequestButtonClicked = this.onRequestButtonClicked.bind(this)

    }

    onSubmitButtonClicked(event) {
        event.preventDefault()
        const {history} = this.props
        history.push('/goods')
    }

    onRequestButtonClicked(event) {
        event.preventDefault()
        const {history} = this.props
        history.push('/ApplicationForm')
    }

    render() {
        return (
            <Container className="loginContainer">
                <Row className="loginRow">
                    <Col xs='0' md='4'>
                    </Col>
                    <Col className="colForm" xs='12' md='4'>
                        <div className="logoContainer">
                            <img className="logo" src={logo} alt="Integrate"/>
                        </div>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Input type="email" name="email" id="Email" placeholder="Correu electrònic"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" id="Password" placeholder="Contrasenya"/>
                                </FormGroup>
                                <FormGroup>
                                    <button type="submit" name="submit" id="Submit" className="btn"
                                            onClick={this.onSubmitButtonClicked}>Entrar
                                    </button>
                                </FormGroup>
                                <FormGroup style={{marginLeft: '30%'}}>
                                    <button type="submit" name="request" id="request" className="req"
                                            onClick={this.onRequestButtonClicked}>Sol·licitud d'accés
                                    </button>
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                    <Col xs='0' md='4'>
                    </Col>
                </Row>
            </Container>
        );
    }
}