import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import DiscountCoupon from '../DiscountCoupon';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Col, Container, Row} from 'reactstrap';
import ModalView from '../ModalView';

const DiscountCouponsList = ({coupons, modal, actions}) => {
    const discountCoupons = (
        coupons.map(coupon =>
            <DiscountCoupon
                key={coupon.id}
                coupon={coupon}
                modal={modal.modalEditCoupon}
                actions={actions}
            />
        )
    )

    const toggle = () => {
        actions.dispatchToggleModalAddCoupon()
    }

    const modalViewAddCoupon = (
        <ModalView modal={modal.modalAddCoupon} actions={actions}/>
    )

    return (
        <div>
            <Container className="discountCouponsList" fluid={true}>
                <Row>
                    <Col sm="12">
                        {discountCoupons}
                        {modalViewAddCoupon}
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="stickyAddCoupon">
                        <button className="stickyAddCouponButton" onClick={toggle}>
                            <FontAwesomeIcon icon="plus-circle" className="plus-circle"/>
                            <span className="addCouponText">Afegir un val de descompte</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

DiscountCouponsList.propTypes = {
    coupons: PropTypes.array.isRequired,
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

export default DiscountCouponsList