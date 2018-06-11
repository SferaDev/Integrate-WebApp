import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import logo from '../../media/icon2.png';
import './style.css';
import {Alert, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import {loginAction} from '../../actions/auth';
import messages from "../../constants/messages";
import {addLocaleData, FormattedMessage, IntlProvider} from "react-intl";
import es from "react-intl/locale-data/es";
import en from "react-intl/locale-data/en";
import ca from "react-intl/locale-data/ca";
import LanguageSelector from "../../components/LanguageSelector";
import {setLocale} from "../../actions/locale";

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

export class Login extends Component {

    constructor(props) {
        super(props);
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this);
    }

    render() {
        let {isLoginPending, isLoginSuccess, loginError, lang, localeActions} = this.props;
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <Container className="loginContainer">
                    <LanguageSelector actions={localeActions} lang={lang}/>
                    <Row className="loginRow">
                        <Col className="colForm" xs='12' md='6'>
                            <div className="logoContainer">
                                <img className="logo" src={logo} alt="Integrate"/>
                            </div>
                            <div style={{marginBottom: '15px'}}>
                                <Form style={{marginTop: '30px'}}>
                                    <FormGroup>
                                        <Label for="emailInput" className="textHeading">
                                            <FormattedMessage id="login.iddoc" />
                                        </Label>
                                        <Input type="email"
                                               name="email"
                                               id="emailInput"
                                               onChange={e => this.setState({id: e.target.value})} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="passwordInput" className="textHeading">
                                            <FormattedMessage id="login.password" />
                                        </Label>
                                        <Input type="password"
                                               name="password"
                                               id="passwordInput"
                                               onChange={e => this.setState({password: e.target.value})} />
                                    </FormGroup>

                                    {
                                        !isLoginPending && loginError &&
                                        <Alert color="danger">
                                            <p id="invalidPasswordAlert">
                                                <FormattedMessage id="login.invalidpassword" />
                                            </p>
                                        </Alert>
                                    }

                                    {
                                        !isLoginPending && isLoginSuccess && <Redirect to='/main' />
                                    }

                                    <FormGroup>
                                        <button
                                            type="submit"
                                            name="submit"
                                            className="btn"
                                            onClick={this.onSubmitButtonClicked}
                                            disabled={isLoginPending}>
                                            <FormattedMessage id="login.login" />
                                        </button>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="solicitudLinkDiv">
                                <Link className="link" to="/signup">
                                    <FormattedMessage id="login.signup" />
                                </Link>
                            </div>
                            <div className="solicitudLinkDiv">
                                <Link className="link" to="/reset">
                                    <FormattedMessage id="login.forgotpassword" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
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
        localeActions: {
            setLocale: (lang) => dispatch(setLocale(lang)),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);