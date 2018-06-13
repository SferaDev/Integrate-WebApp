import React, {Component} from 'react';
import {connect} from 'react-redux'
import ModalView from '../../components/ModalView';
import GoodsList from '../../components/GoodsList';
import './style.css';

import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es'
import en from 'react-intl/locale-data/en'
import ca from 'react-intl/locale-data/ca'
import messages from "../../constants/messages"
import LanguageSelector from '../../components/LanguageSelector';
import MainView from '../../components/MainView';
import {dispatchReceiveGoods} from '../../actions/goods';
import {dispatchAddGood} from '../../actions/goods';
import {setLocale} from '../../actions/locale';
import {dispatchDeleteGood} from '../../actions/goods';
import {dispatchEditGood} from '../../actions/goods';
import {dispatchToggleModal} from '../../actions/modal';
import {dispatchToggleModalEdit} from '../../actions/modal';
import {dispatchCleanModalState} from '../../actions/modal';
import {logoutAction} from '../../actions/auth';
import {Container} from 'reactstrap';
import {Redirect} from 'react-router';

addLocaleData(en)
addLocaleData(es)
addLocaleData(ca)

export class GoodsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.actions.goodsActions.dispatchReceiveGoods()
    }

    render() {
        let {goods, actions, modal, lang} = this.props;

        if ((!this.props.auth.isLoginPending && !this.props.auth.isLoginSuccess) || !this.props.auth) {
            return (
                <Redirect to='/'/>
            )
        }

        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <Container fluid={true}>
                        <LanguageSelector className="languageSelector" actions={actions.localeActions} lang={lang}/>
                        <MainView className="MainView" actions={actions.authActions} userName={this.props.auth.user.name}/>
                        <Container fluid={true} className='goodsContainer'>
                                    <GoodsList
                                        goods={goods} actions={actions}/>
                                    <ModalView modal={modal} actions={actions} lang={lang}/>
                        </Container>
                </Container>
            </IntlProvider>
        )
    }
}

const mapStateToProps = state => ({
    goods: state.goods,
    modal: state.modal,
    lang: state.locale.lang,
    auth: state.auth,
    userName: state.auth.user.name
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            goodsActions: {
                dispatchReceiveGoods: () => dispatch(dispatchReceiveGoods()),
                dispatchAddGood: (good) => dispatch(dispatchAddGood(good)),
                dispatchDeleteGood: (good) => dispatch(dispatchDeleteGood(good)),
                dispatchEditGood: (good) => dispatch(dispatchEditGood(good)),
            },
            modalActions: {
                dispatchToggleModal: () => dispatch(dispatchToggleModal()),
                dispatchToggleModalEdit: (good) => dispatch(dispatchToggleModalEdit(good)),
                dispatchCleanModalState: () => dispatch(dispatchCleanModalState()),
            },
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
)(GoodsContainer)
