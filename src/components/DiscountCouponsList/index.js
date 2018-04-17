import React from 'react';
import './style.css';
import '../DiscountCoupon/style.css';
import PropTypes from 'prop-types';
import DiscountCoupon from '../DiscountCoupon';

const DiscountCouponsList = ({coupons}) => {
    const discountCoupons = (
        coupons.map(coupon =>
            <DiscountCoupon
                key={coupon.id}
                url={coupon.url}
                name={coupon.name}
                originalPrice={coupon.originalPrice}
                appliedDiscount={coupon.appliedDiscount}
                currentPrice={coupon.currentPrice}
                numberOfSolds={coupon.numberOfSolds}
                numberOfFreeUnits={coupon.numberOfFreeUnits}
            />
        )
    )

    return (
        <div>
            {discountCoupons}
        </div>
    )
}

DiscountCouponsList.propTypes = {
    coupons: PropTypes.array
}

export default DiscountCouponsList