import React, {Component} from 'react';
import {connect} from 'react-redux'

import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es'
import en from 'react-intl/locale-data/en'
import ca from 'react-intl/locale-data/ca'
import messages from "../../constants/messages"
import LanguageSelector from '../../components/LanguageSelector';
import ChangePassword from '../../components/ChangePassword';
import MainView from '../../components/MainView';
import {setLocale} from '../../actions/locale';
import {logoutAction} from '../../actions/auth';
import {Container} from 'reactstrap';
import './style.css'

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

export class ChangePasswordContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.actions.localeActions.setLocale(JSON.parse(localStorage.getItem('user')).interfaceLanguage)
    }

    render() {
        let {lang, actions} = this.props;
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <Container fluid={true}>
                    <div className="signupContainer">
                        <LanguageSelector actions={actions.localeActions} lang={lang}/>
                        <MainView actions={actions.authActions}/>
                            <ChangePassword history={this.props.history}/>
                    </div>
                </Container>
            </IntlProvider>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.locale.lang,
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            localeActions: {
                setLocale: (lang) => dispatch(setLocale(lang)),
            },
            authActions: {
                logoutAction: () => dispatch(logoutAction()),
            },
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChangePasswordContainer)