import React from 'react';
import logo from '../../media/icon2.png';
import {Button, Col, Row, Grid, FormControl, Input, Container, Form, FormGroup} from 'reactstrap';
import './style.css';

export class Login extends React.Component {
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
                                    <button type="submit" name="submit" id="Submit" className="btn">Entrar</button>
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