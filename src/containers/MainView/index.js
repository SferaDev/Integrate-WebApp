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
import {logoutAction, setUserAndToken} from '../../actions/auth';
import {setLocale} from '../../actions/locale';
import {dispatchSetIncentives} from '../../actions/incentives';

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

class MainViewContainer extends Component {
    constructor(props) {
        super(props);
        this.props.actions.incentivesActions.dispatchSetIncentives()
    }

    render() {
        let {lang, actions, user, incentives} = this.props;
        if (!lang || !actions || !user || !incentives){
            return(
                <div>Loading...</div>
            )
        }

        else
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div className="mainviewContainer">
                    <LanguageSelector actions={actions.localeActions} lang={lang}/>
                    <MainView actions={actions.authActions}/>
                    <UserInfo user={user}/>
                    <Incentive className="Incentive" incentives={incentives}/>
                </div>
            </IntlProvider>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.locale.lang,
    user: state.auth.user,
    incentives: state.incentives.incentives,
});

const mapDispatchToProps = dispatch => ({
    actions: {
        localeActions: {
            setLocale: (lang) => dispatch(setLocale(lang)),
        },
        authActions: {
            setUser: (user, token) => dispatch(setUserAndToken(user, token)),
            logoutAction: () => dispatch(logoutAction()),
        },
        incentivesActions: {
            dispatchSetIncentives: () => dispatch(dispatchSetIncentives()),
        },
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainViewContainer)