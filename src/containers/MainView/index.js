import React, {Component} from 'react';
import {connect} from 'react-redux'

import {addLocaleData, FormattedMessage, IntlProvider} from 'react-intl';
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

        this.handleIntervalChange = this.handleIntervalChange.bind(this)

        this.state = {
            statistics: [],
            selectedInterval: 'Month',
        };
    }

    fetchStatistics(interval) {
        apiGetStatistics(interval)
            .then(statistics => this.setState({
                statistics,
            }))
    }

    componentDidMount() {
        this.fetchStatistics(this.state.selectedInterval);

        this.props.actions.incentivesActions.dispatchSetIncentives()
    }

    handleIntervalChange(event) {
        this.setState({
            statistics: [],
            selectedInterval: event.target.value,
        })

        this.fetchStatistics(event.target.value);
    }

    render() {
        let {lang, actions, user, incentives} = this.props;
        if (!lang || !actions || !user || !incentives) {
            return (
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
                                    <Col sm='12' md='8' className="contentCol">
                                        <Incentive className="Incentive" incentives={incentives}/>

                                        <div style={{textAlign: 'center'}}>
                                            <label style={{marginRight: '8px', marginTop: '10px'}}>
                                                <FormattedMessage id='statistics.statistics'/>
                                            </label>
                                            <select
                                                style={{marginTop: '20px'}}
                                                value={this.state.selectedInterval}
                                                onChange={this.handleIntervalChange}>

                                                <FormattedMessage id='statistics.day' tagName='option'>
                                                    {(message) => <option value='Day'>{message}</option>}
                                                </FormattedMessage>
                                                <FormattedMessage id='statistics.week' tagName='option'>
                                                    {(message) => <option value='Week'>{message}</option>}
                                                </FormattedMessage>
                                                <FormattedMessage id='statistics.month' tagName='option'>
                                                    {(message) => <option value='Month'>{message}</option>}
                                                </FormattedMessage>
                                                <FormattedMessage id='statistics.year' tagName='option'>
                                                    {(message) => <option value='Year'>{message}</option>}
                                                </FormattedMessage>
                                            </select>
                                        </div>

                                        { this.state.statistics.length > 0 && <Statisitics data={this.state.statistics}/> }

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