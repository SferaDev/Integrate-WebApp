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
import {Col, Container, Row} from 'reactstrap';
import './style.css'
import Statisitics from "../../components/Statisitics";
import {apiGetStatistics} from "../../api/statistics";

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

export class MainViewContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statistics: [],
        };
    }

    componentDidMount() {
        apiGetStatistics().then(statistics => this.setState({
            statistics,
        }))

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
                <Container fluid={true} className='mainViewContainer'>
                    <div>
                        <LanguageSelector actions={actions.localeActions} lang={lang}/>
                        <MainView actions={actions.authActions}/>
                        <Container fluid={true}>
                            <Row>
                                <Col sm='12' md='4' className='userInfoCol'>
                                    <UserInfo user={user}/>
                                </Col>
                                <Col sm='12' md='8' className="incentivesCol">
                                    <Incentive className="Incentive" incentives={incentives}/>
                                    <Statisitics data={this.state.statistics}/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
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