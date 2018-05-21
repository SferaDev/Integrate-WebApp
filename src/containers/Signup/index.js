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
import SignUp from '../../components/Signup';

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

class SignupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {lang, actions} = this.props;
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div className="signupContainer">
                    <LanguageSelector actions={actions.localeActions} lang={lang}/>
                    <SignUp/>
                </div>
            </IntlProvider>
        )
    }
}

SignupContainer.propTypes = {
    lang: PropTypes.string.isRequired,
    actions: PropTypes.shape({
        localeActions: PropTypes.object.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    lang: state.locale.lang,
});

const mapDispatchToProps = dispatch => ({
    actions: {
        localeActions: bindActionCreators(LocaleActions, dispatch),
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupContainer)