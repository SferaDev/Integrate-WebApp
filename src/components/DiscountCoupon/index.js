import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row,} from 'reactstrap';

const DiscountCoupon = ({url, name, originalPrice, appliedDiscount, currentPrice, numberOfSolds, numberOfFreeUnits}) => (
    <Container>
        <Row>
            <Col md="12" lg="12" className="productCol">
                <div className="product">
                    <img className="couponImg"
                         src={url} alt={name}/>
                    <div className="productFeatures">
                        <Row className="productTitle">
                            <Col md="12" lg="12">
                                <b className="name">{name}</b>
                            </Col>
                        </Row>
                        <div className="productDetails">
                            <Row className="productDetailsRow">
                                <Col md="12" lg="6" className="productDetailsCol1">
                                    <div className="innerColDiv">
                                        <div className="preuOriginal">
                                            <span><b>Preu original</b></span><span
                                            className="originalPrice">{originalPrice}€</span>
                                        </div>
                                        <div className="descompteAplicat">
                                            <span><b>Descompte aplicat</b></span><span
                                            className="appliedDiscount">{appliedDiscount}%</span>
                                        </div>
                                        <div className="preuFinal">
                                            <span><b>Preu final</b></span><span
                                            className="currentPrice">{currentPrice}€</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="12" lg="6" className="productDetailsCol2">
                                    <div className="innerColDiv">
                                        <div className="unitatsVenudes">
                                            <span><b>Unitats venudes</b></span><span
                                            className="numberOfSolds">{numberOfSolds}</span>
                                        </div>
                                        <div className="unitatsRestants">
                                            <span><b>Unitats restants</b></span><span
                                            className="numberOfFreeUnits">{numberOfFreeUnits}</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="productButtons">
                        <button name="delete" id="Delete" className="btnDelete">Editar</button>
                        <button name="delete" id="Delete" className="btnDelete">Esborrar</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)

DiscountCoupon.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    originalPrice: PropTypes.string,
    appliedDiscount: PropTypes.string,
    currentPrice: PropTypes.string,
    numberOfSolds: PropTypes.string,
    numberOfFreeUnits: PropTypes.string
}

export default DiscountCoupon