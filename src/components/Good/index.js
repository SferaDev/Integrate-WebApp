import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row,} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './style.css';

const Good = ({good, actions}) => {
    const toggle = () => {
        actions.modalActions.dispatchToggleModalEdit(good)
    }

    const deleteGood = () => {
        actions.goodsActions.dispatchDeleteGood(good)
    }

    return (
        <Container>
            <Row className="productRow">
                <Col md="12" lg="12" className="productCol">
                    <div className="product">
                        <img className="goodImg"
                             src={good.picture} alt={good.productName}/>
                        <div className="productFeatures">
                            <Row className="productTitle">
                                <Col md="12" lg="12">
                                    <b className="name">{good.productName}</b>
                                </Col>
                            </Row>
                            <div className="productDetails">
                                <Row className="productDetailsRow">
                                    <Col md="12" lg="4" className="productDetailsCol1">
                                        <div className="innerColDiv">
                                            <div className="preuOriginal">
                                                <span><b>Preu original:&nbsp;</b></span>
                                                <span className="originalPrice">{good.initialPrice}€</span>
                                            </div>
                                            <div className="unitatsRestants">
                                                <span><b>Unitats restants:&nbsp;</b></span><span
                                                className="pendingUnits">{good.pendingUnits}</span>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md="12" lg="4" className="productDetailsCol2">
                                        <div className="innerColDiv">
                                            <div className="descompteAplicat">
                                                <span><b>Descompte aplicat:&nbsp;</b></span><span
                                                className="appliedDiscount">{good.discount}{good.discountType === '%' ? '%' : '€'}</span>
                                            </div>
                                            <div className="tempsReutilitzacio">
                                                <span><b>Temps reutilització:&nbsp;</b></span><span
                                                className="reusePeriod">{good.reusePeriod} dies</span>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md="12" lg="4" className="productDetailsCol3">
                                        <div className="innerColDiv">
                                            <div className="preuFinal">
                                                <span><b>Preu final:&nbsp;</b></span><span
                                                className="currentPrice">{good.discountType === '%' ?
                                                (parseFloat(good.initialPrice).toFixed(2) - parseFloat(good.initialPrice).toFixed(2) * parseFloat(good.discount).toFixed(2) / 100).toFixed(2) :
                                                (parseFloat(good.initialPrice).toFixed(2) - parseFloat(good.discount).toFixed(2)).toFixed(2)}</span>
                                            </div>
                                            <div className="categoria">
                                                <span><b>Categoria:&nbsp;</b></span><span
                                                className="category">{good.category}</span>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                        <div className="productButtons">
                            <button name="edit" id="edit" className="btnEdit" onClick={toggle}>
                                {'Editar  '}
                                <FontAwesomeIcon icon="edit" className="faIcon"/>
                            </button>
                            <button name="delete" id="Delete" className="btnDelete" onClick={deleteGood}>
                                {'Esborrar  '}
                                <FontAwesomeIcon icon="trash-alt" className="faIcon"/>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

Good.propTypes = {
    good: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            productName: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
            discountType: PropTypes.string.isRequired,
            discount: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            reusePeriod: PropTypes.string.isRequired,
            initialPrice: PropTypes.string.isRequired,
            pendingUnits: PropTypes.string.isRequired,
        }).isRequired,
    actions: PropTypes.shape(
    {
        goodsActions: PropTypes.object.isRequired,
        modalActions: PropTypes.object.isRequired,
    }).isRequired,
}

export default Good