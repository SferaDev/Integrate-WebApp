import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row,} from 'reactstrap';

class DiscountCoupon extends React.Component {
    render() {
        const {
            url, name, originalPrice, appliedDiscount,
            currentPrice, numberOfSolds, numberOfFreeUnits
        } = this.props;
        return (
            <Col md="12" lg="6" className="productCol">
                <div className="product">
                    <img className="couponImg"
                         src={url}/>
                    <div className="productFeatures">
                        <div className="productTitle">
                            <b>{name}</b>
                        </div>
                        <div className="productDetails">
                            <div className="preuOriginal">
                                <span><b>Preu original</b></span><span>{originalPrice}€</span>
                            </div>
                            <div className="descompteAplicat">
                                <span><b>Descompte aplicat</b></span><span>{appliedDiscount}%</span>
                            </div>
                            <div className="preuFinal">
                                <span><b>Preu final</b></span><span>{currentPrice}€</span>
                            </div>
                            <div className="unitatsVenudes">
                                <span><b>Unitats venudes</b></span><span>{numberOfSolds}</span>
                            </div>
                            <div className="unitatsRestants">
                                <span><b>Unitats restants</b></span><span>{numberOfFreeUnits}</span>
                            </div>
                        </div>
                    </div>
                    <div className="productButtons">
                        <button name="delete" id="Delete" className="btnDelete">Editar</button>
                        <button name="delete" id="Delete" className="btnDelete">Esborrar</button>
                    </div>
                </div>
            </Col>
        );
    }
}

DiscountCoupon.propTypes = {
    name: PropTypes.string,
    originalPrice: PropTypes.number,
    appliedDiscount: PropTypes.number,
    currentPrice: PropTypes.number,
    numberOfSolds: PropTypes.number,
    numberOfFreeUnits: PropTypes.number
};

export default DiscountCoupon;