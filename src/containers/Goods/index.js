import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import ModalView from '../../components/ModalView';
import GoodsList from '../../components/GoodsList';
import './style.css';

import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es'
import en from 'react-intl/locale-data/en'
import ca from 'react-intl/locale-data/ca'
import messages from "../../constants/messages"
import LanguageSelector from '../../components/LanguageSelector';
import {dispatchReceiveGoods} from '../../actions/goods';
import {dispatchAddGood} from '../../actions/goods';
import {setLocale} from '../../actions/locale';
import {dispatchDeleteGood} from '../../actions/goods';
import {dispatchEditGood} from '../../actions/goods';
import {dispatchToggleModal} from '../../actions/modal';
import {dispatchToggleModalEdit} from '../../actions/modal';
import {dispatchCleanModalState} from '../../actions/modal';

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
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div className="goodsContainer">
                    <LanguageSelector className="languageSelector" actions={actions.localeActions} lang={lang}/>
                    <GoodsList
                        goods={goods} actions={actions}/>
                    <ModalView modal={modal} actions={actions} lang={lang}/>
                </div>
            </IntlProvider>
        )
    }
}

GoodsContainer.propTypes = {
    goods: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        discountType: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
        category: PropTypes.number.isRequired,
        reusePeriod: PropTypes.number.isRequired,
        initialPrice: PropTypes.number.isRequired,
        pendingUnits: PropTypes.number.isRequired,
        currentPrice: PropTypes.number,
    })),
    modal: PropTypes.shape(
        {
            isOpen: PropTypes.bool.isRequired,
            good: PropTypes.object,
        }
    ).isRequired,
    lang: PropTypes.string.isRequired,
    actions: PropTypes.shape({
        modalActions: PropTypes.object.isRequired,
        goodsActions: PropTypes.object.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    goods: state.goods,
    modal: state.modal,
    lang: state.locale.lang,
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoodsContainer)