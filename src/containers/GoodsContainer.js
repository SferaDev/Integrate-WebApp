import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import bindActionCreators from 'redux/es/bindActionCreators';
import * as AllActions from '../actions'
import ModalView from '../components/ModalView';
import GoodsList from '../components/GoodsList';

const GoodsContainer = ({goods, modal, actions}) => (
    <div>
        <GoodsList
            goods={goods} actions={actions}/>
        <ModalView modal={modal} actions={actions}/>
    </div>
)

GoodsContainer.propTypes = {
    goods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        discountType: PropTypes.string.isRequired,
        discount: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        reusePeriod: PropTypes.string.isRequired,
        initialPrice: PropTypes.string.isRequired,
        pendingUnits: PropTypes.string.isRequired,
        currentPrice: PropTypes.string,
    })),
    modal: PropTypes.shape(
        {
            isOpen: PropTypes.bool.isRequired,
            good: PropTypes.object,
        }
    ).isRequired,
    actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    goods: state.goods,
    modal: state.modal
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoodsContainer)