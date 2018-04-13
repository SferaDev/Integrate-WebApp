import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import DiscountCouponsList from '../components/DiscountCouponsList';
import bindActionCreators from 'redux/es/bindActionCreators';
import * as TodoActions from '../actions'

const CouponsContainer = ({coupons, modal, actions}) => (
    <DiscountCouponsList
        coupons={coupons} modal={modal} actions={actions}/>
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
            modalAddCoupon: PropTypes.shape({
                isOpen: PropTypes.bool.isRequired,
            }).isRequired,
            modalEditCoupon: PropTypes.shape({
                isOpen: PropTypes.bool.isRequired,
            }).isRequired,
        }
    ).isRequired,
    actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    coupons: state.coupons,
    modal: state.modal
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CouponsContainer)