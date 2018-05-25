import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import logo from '../../media/icon2.png';
import './style.css';
import {Alert, Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import {loginAction} from '../../actions/auth';
import messages from "../../constants/messages";
import {addLocaleData, FormattedMessage, IntlProvider} from "react-intl";
import LanguageSelector from "../../components/LanguageSelector";
import bindActionCreators from "redux/es/bindActionCreators";
import * as LocaleActions from "../../actions/locale";
import ca from "react-intl/locale-data/ca";
import es from "react-intl/locale-data/es";
import en from "react-intl/locale-data/en";

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

export class Login extends Component {

    constructor(props) {
        super(props);
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this);
    }

    render() {
        let {isLoginPending, isLoginSuccess, loginError, lang, localeActions, intl} = this.props;
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div>
                    <LanguageSelector className="languageSelector" actions={localeActions} lang={lang}/>
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
                                                   onChange={e => this.setState({id: e.target.value})}>
                                                <FormattedMessage id='login.iddoc'>
                                                    {(placeholder) => <option value="1">{placeholder}</option>}
                                                </FormattedMessage>
                                            </Input>
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
                                                <p id="invalidPasswordAlert">
                                                    <FormattedMessage id='login.invalidusernameorpassword' />
                                                </p>
                                            </Alert>
                                        }

                                        {
                                            !isLoginPending && isLoginSuccess && <Redirect to='/main'/>
                                        }

                                        <FormGroup>
                                            <button
                                                type="submit"
                                                name="submit"
                                                className="btn"
                                                onClick={this.onSubmitButtonClicked}
                                                disabled={isLoginPending}>Entrar
                                            </button>
                                        </FormGroup>

                                    </Form>
                                </div>
                                <div className="solicitudLinkDiv">
                                    <Link className="solicitudLink" to="/signup">Sol·licitud d'accés</Link>
                                </div>
                                <div className="solicitudLinkDiv">
                                    <Link className="solicitudLink" to="/reset">Has oblidat la contrasenya?</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </IntlProvider>
        );
    }

    onSubmitButtonClicked(event) {
        event.preventDefault();
        let {id, password} = this.state;
        this.props.login(id, password);
    }
}

const mapStateToProps = ({auth, locale}) => {
    return {
        isLoginPending: auth.isLoginPending,
        isLoginSuccess: auth.isLoginSuccess,
        loginError: auth.loginError,
        lang: locale.lang,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (id, password) => dispatch(loginAction(id, password)),
        localeActions: bindActionCreators(LocaleActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);