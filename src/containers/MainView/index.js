import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import bindActionCreators from 'redux/es/bindActionCreators';
import * as LocaleActions from '../../actions/locale'

import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es'
import en from 'react-intl/locale-data/en'
import ca from 'react-intl/locale-data/ca'
import messages from "../../constants/messages"
import LanguageSelector from '../../components/LanguageSelector';
import MainView from '../../components/MainView';
import Incentive from '../../components/Incentive';
import UserInfo from '../../components/UserInfo';

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

class MainViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {lang, actions, user} = this.props;
        console.log("user: ", user)
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div className="mainviewContainer">
                    <LanguageSelector actions={actions.localeActions} lang={lang}/>
                    <MainView/>
                    <UserInfo user={user}/>
                    <Incentive className="Incentive"/>
                </div>
            </IntlProvider>
        )
    }
}

MainViewContainer.propTypes = {
    lang: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        localeActions: PropTypes.object.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    lang: state.locale.lang,
    user: state.entity,
});

const mapDispatchToProps = dispatch => ({
    actions: {
        localeActions: bindActionCreators(LocaleActions, dispatch),
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainViewContainer)