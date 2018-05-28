import React, {Component} from 'react';
import {connect} from 'react-redux'

import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es'
import en from 'react-intl/locale-data/en'
import ca from 'react-intl/locale-data/ca'
import messages from "../../constants/messages"
import LanguageSelector from '../../components/LanguageSelector';
import MainView from '../../components/MainView';
import Incentive from '../../components/Incentive';
import UserInfo from '../../components/UserInfo';
import {logoutAction, setUser} from '../../actions/auth';
import {setLocale} from '../../actions/locale';

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

class MainViewContainer extends Component {
    componentDidMount(){
        while(!JSON.parse(localStorage.getItem('user')) && !JSON.getItem('token')) {}

        console.log('CDM user', JSON.parse(localStorage.getItem('user')))
        console.log('CDM token', localStorage.getItem('token'))
        this.props.actions.authActions.setUser(JSON.parse(localStorage.getItem('user')))
        this.props.actions.localeActions.setLocale(JSON.parse(localStorage.getItem('user')).interfaceLanguage)
    }

    render() {
        let {lang, actions, user} = this.props;
        if (!actions || !lang || !user) {
            console.log('User in loading', user)
            return <div>Loading...</div>
        }

        console.log('Well loaded lang', lang)
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div className="mainviewContainer">
                    <LanguageSelector actions={actions.localeActions} lang={lang}/>
                    <MainView actions={actions.authActions}/>
                    <UserInfo user={user}/>
                    <Incentive className="Incentive"/>
                </div>
            </IntlProvider>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.locale.lang,
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    actions: {
        localeActions: {
            setLocale: (lang) => dispatch(setLocale(lang)),
        },
        authActions: {
            setUser: (user) => dispatch(setUser(user)),
            logoutAction: () => dispatch(logoutAction()),
        },
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainViewContainer)