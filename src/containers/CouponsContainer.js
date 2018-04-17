import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import DiscountCouponsList from '../components/DiscountCouponsList';
import {getActiveCoupons} from '../reducers/coupons';

const CouponsContainer = ({coupons}) => (
    <DiscountCouponsList
        coupons={coupons}/>
)

CouponsContainer.propTypes = {
    coupons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string,
        name: PropTypes.string.isRequired,
        originalPrice: PropTypes.string.isRequired,
        appliedDiscount: PropTypes.string.isRequired,
        currentPrice: PropTypes.string.isRequired,
        numberOfSolds: PropTypes.string.isRequired,
        numberOfFreeUnits: PropTypes.string.isRequired,
    })).isRequired,
}

const mapStateToProps = state => ({
    coupons: getActiveCoupons(state.coupons)
})

export default connect(
    mapStateToProps,
)(CouponsContainer)