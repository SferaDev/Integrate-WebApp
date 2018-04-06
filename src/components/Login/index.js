import React from 'react';
import logo from '../../media/icon2.png';
import {Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import './style.css';

export class Login extends React.Component {

    constructor(props) {
        super(props)
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this)
    }

    onSubmitButtonClicked(event) {
        event.preventDefault()
        const {history} = this.props
        history.push('/coupons')
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