import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import DiscountCouponsList from '../components/DiscountCouponsList';
import bindActionCreators from 'redux/es/bindActionCreators';
import * as AllActions from '../actions'
import ModalView from '../components/ModalView';

const CouponsContainer = ({coupons, modal, actions}) => (
    <div>
        <DiscountCouponsList
            coupons={coupons} actions={actions}/>
        <ModalView modal={modal} actions={actions}/>
    </div>
)

CouponsContainer.propTypes = {
    coupons: PropTypes.arrayOf(PropTypes.shape({
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
            coupon: PropTypes.object,
        }
    ).isRequired,
    actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    coupons: state.coupons,
    modal: state.modal
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CouponsContainer)