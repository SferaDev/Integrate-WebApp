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
import {deleteEntity, logoutAction, setUserAndToken} from '../../actions/auth';
import {setLocale} from '../../actions/locale';
import {Col, Container, Row} from 'reactstrap';
import './style.css'
import Statistics from "../../components/Statisitics";
import {apiGetStatistics} from "../../api/statistics";
import {Redirect} from 'react-router';
import {dispatchReceiveGoods} from "../../actions/goods";
import {dispatchSetIncentives} from "../../actions/incentives";

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

export class MainViewContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statistics: [],
            selectedInterval: 'Month',
            fetchingStatistics: false,
            selectedGood: '',
        };

        this.handleIntervalChange = this.handleIntervalChange.bind(this)
        this.handleGoodChange = this.handleGoodChange.bind(this)
    }

    fetchStatistics(interval, goodId = null) {
        this.setState((state) => ({
            ...state,
            fetchingStatistics: true
        }))

        apiGetStatistics(interval, goodId)
            .then(statistics => this.setState({
                statistics,
                fetchingStatistics: false
            }))
    }

    componentDidMount() {
        this.fetchStatistics(this.state.selectedInterval);

        this.props.actions.incentivesActions.dispatchSetIncentives()
        this.props.actions.goodsActions.dispatchReceiveGoods()
    }

    handleIntervalChange(event) {
        this.setState({
            statistics: [],
            selectedGood: '',
            selectedInterval: event.target.value,
        })

        this.fetchStatistics(event.target.value);
    }

    handleGoodChange(event) {
        const selectedGood = event.target.value;
        this.setState(state => ({
            ...state,
            selectedGood
        }))

        this.fetchStatistics(this.state.selectedInterval, selectedGood);
    }

    render() {
        let {lang, actions, user, incentives, goods} = this.props;

        if (!this.props.auth.isLoginPending && !this.props.auth.isLoginSuccess) {
            return (
                <Redirect to='/'/>
            )
        }

        if (!lang || !actions || !user || !incentives || !this.state.statistics) {
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
                            <MainView actions={actions.authActions} userName={this.props.user.name}/>
                            <Container fluid={true}>
                                <Row>
                                    <Col sm='12' md='4' className='userInfoCol'>
                                        <UserInfo user={user} actions={actions.authActions}/>
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

                                        <div style={{textAlign: 'center'}}>
                                            <label style={{marginRight: '8px', marginTop: '10px', marginBottom: '20px'}}>
                                                <FormattedMessage id='statistics.statisticsbygood'/>
                                            </label>
                                            <select onChange={this.handleGoodChange} value={this.state.selectedGood}>
                                                <FormattedMessage id='statistics.allgoods' tagName='option'>
                                                    {(message) => <option value=''>{message}</option>}
                                                </FormattedMessage>
                                                {
                                                    goods.map((good) => <option key={good._id} value={good._id}>{good.productName}</option>)
                                                }
                                            </select>
                                        </div>

                                        {this.state.statistics.length > 0 && <Statistics data={this.state.statistics}/>}

                                        {!this.state.fetchingStatistics && this.state.statistics.length === 0 && <p style={{textAlign: 'center', marginTop: '40px'}}><FormattedMessage id='statistics.nostatistics'/></p>}

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
    auth: state.auth,
    user: state.auth.user,
    incentives: state.incentives.incentives,
    goods: state.goods,
});

const mapDispatchToProps = dispatch => ({
    actions: {
        localeActions: {
            setLocale: (lang) => dispatch(setLocale(lang)),
        },
        authActions: {
            setUser: (user, token) => dispatch(setUserAndToken(user, token)),
            logoutAction: () => dispatch(logoutAction()),
            deleteEntity: () => dispatch(deleteEntity()),
        },
        goodsActions: {
            dispatchReceiveGoods: () => dispatch(dispatchReceiveGoods()),
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