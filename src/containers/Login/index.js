import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import logo from '../../media/icon2.png';
import './style.css';
import {Alert, Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import {loginAction} from '../../actions/auth';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this);
    }

    render() {
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
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
                                    <Input type="email"
                                           name="email"
                                           placeholder="Document d'Identitat"
                                           onChange={e => this.setState({id: e.target.value})}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password"
                                           name="password"
                                           placeholder="Contrasenya"
                                           onChange={e => this.setState({password: e.target.value})}
                                    />
                                </FormGroup>

                                {
                                    !isLoginPending && loginError &&
                                    <Alert color="danger">
                                        L'usuari o la contrassenya no son correctes.
                                    </Alert>
                                }

                                {
                                    !isLoginPending && isLoginSuccess && <Redirect to='/' />
                                }

                                <FormGroup>
                                    <button
                                        type="submit"
                                        name="submit"
                                        className="btn"
                                        onClick={this.onSubmitButtonClicked}
                                        disabled={isLoginPending}>Entrar</button>
                                </FormGroup>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    onSubmitButtonClicked(event) {
        event.preventDefault();
        let {id, password} = this.state;
        this.props.login(id, password);
    }
}

const mapStateToProps = ({auth}) => {
    return {
        isLoginPending: auth.isLoginPending,
        isLoginSuccess: auth.isLoginSuccess,
        loginError: auth.loginError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (id, password) => dispatch(loginAction(id, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);