import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import './style.css';
import '../DiscountCoupon/style.css';
import DiscountCoupon from '../DiscountCoupon';
import PropTypes from 'prop-types';


export default class DiscountCouponList extends React.Component {
    render() {
        const {couponsList} = this.props;
        return (
            <Container className="discountCouponsList">
                {couponsList.map(coupon =>
                    <Row>
                        <DiscountCoupon
                            url={coupon.url}
                            name={coupon.name}
                            originalPrice={coupon.originalPrice}
                            appliedDiscount={coupon.appliedDiscount}
                            currentPrice={coupon.currentPrice}
                            numberOfSolds={coupon.numberOfSolds}
                            numberOfFreeUnits={coupon.numberOfFreeUnits}
                        />
                    </Row>
                )}
                <Row>
                    <Col xs="12">
                        <button
                            id="AddProduct"
                            className="btnAddProduct"
                        >Add
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

DiscountCouponList.propTypes = {
    couponsList: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string.isRequired,
        originalPrice: PropTypes.string.isRequired,
        appliedDiscount: PropTypes.string.isRequired,
        currentPrice: PropTypes.string.isRequired,
        numberOfSold: PropTypes.string.isRequired,
        numberOfFreeUnits: PropTypes.string.isRequired,
    })),
};