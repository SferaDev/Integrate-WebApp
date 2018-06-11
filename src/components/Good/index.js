import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './style.css';
import {FormattedMessage} from 'react-intl'

const Good = ({good, actions}) => {
    const toggle = () => {
        actions.modalActions.dispatchToggleModalEdit(good)
    };

    const deleteGood = () => {
        actions.goodsActions.dispatchDeleteGood(good)
    };

    return (
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
                                                <span><b>
                                                    <FormattedMessage id='good.originalPrice'
                                                                      defaultMessage='Preu original'/>
                                                    :&nbsp;</b></span>
                                                <span className="originalPrice">{good.initialPrice}€</span>
                                            </div>
                                            <div className="unitatsRestants">
                                                <span><b>
                                                    <FormattedMessage id='good.pendingUnits'
                                                                           defaultMessage='Unitats restants'/>
                                                    :&nbsp;</b></span><span
                                                className="pendingUnits">{good.pendingUnits}</span>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md="12" lg="4" className="productDetailsCol2">
                                        <div className="innerColDiv">
                                            <div className="descompteAplicat">
                                                <span><b>
                                                    <FormattedMessage id='good.appliedDiscount'
                                                                      defaultMessage='Descompte aplicat'/>
                                                    :&nbsp;</b></span><span
                                                className="appliedDiscount">{good.discount}{good.discountType === '%' ? '%' : '€'}</span>
                                            </div>
                                            <div className="tempsReutilitzacio">
                                                <span><b>
                                                    <FormattedMessage id='good.reusePeriod'
                                                                      defaultMessage='Temps de reutilització'/>
                                                    :&nbsp;</b></span><span
                                                className="reusePeriod">{good.reusePeriod}</span>&nbsp;
                                                <FormattedMessage id='good.days'
                                                                  defaultMessage='dies'/>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md="12" lg="4" className="productDetailsCol3">
                                        <div className="innerColDiv">
                                            <div className="preuFinal">
                                                <span><b>
                                                    <FormattedMessage id='good.currentPrice'
                                                                      defaultMessage='Preu final'/>
                                                    :&nbsp;</b></span><span
                                                className="currentPrice">{good.discountType === '%' ?
                                                (parseFloat(good.initialPrice).toFixed(2) - parseFloat(good.initialPrice).toFixed(2) * parseFloat(good.discount).toFixed(2) / 100).toFixed(2) :
                                                (parseFloat(good.initialPrice).toFixed(2) - parseFloat(good.discount).toFixed(2)).toFixed(2)}€</span>
                                            </div>
                                            <div className="categoria">
                                                <span><b>
                                                    <FormattedMessage id='good.category'
                                                                      defaultMessage='Categoria'/>
                                                    :&nbsp;</b></span><span
                                                className="category" catvalue={good.category}>
                                                {
                                                    good.category === 1 ?
                                                        <FormattedMessage id='good.category.nutrition'
                                                                          defaultMessage='Alimentació'/>
                                                        :
                                                        good.category === 2 ?
                                                            <FormattedMessage id='good.category.culture'
                                                                              defaultMessage='Cultura'/>
                                                            :
                                                            good.category === 3 ?
                                                                <FormattedMessage id='good.category.education'
                                                                                  defaultMessage='Formació'/>
                                                                :
                                                                good.category === 4 ?
                                                                    <FormattedMessage id='good.category.mobility'
                                                                                      defaultMessage='Mobilitat'/>
                                                                    :
                                                                    good.category === 5 ?
                                                                        <FormattedMessage id='good.category.technology'
                                                                                          defaultMessage='Tecnologia'/>
                                                                        :
                                                                        good.category === 6 ?
                                                                            <FormattedMessage id='good.category.healthcare'
                                                                                              defaultMessage='Salut'/>
                                                                            :
                                                                            good.category === 7 ?
                                                                                <FormattedMessage id='good.category.sports'
                                                                                                  defaultMessage='Esports'/>
                                                                                :
                                                                                good.category === 8 ?
                                                                                    <FormattedMessage id='good.category.leisure'
                                                                                                      defaultMessage='Lleure'/>
                                                                                    :
                                                                                    good.category === 9 ?
                                                                                        <FormattedMessage id='good.category.others'
                                                                                                          defaultMessage='Altres'/>
                                                                                        :
                                                                                        <FormattedMessage id='good.category.error'
                                                                                                          defaultMessage='Error'/>
                                                }
                                            </span>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                        <div className="productButtons">
                            <button name="edit" id="edit" className="btnEdit" onClick={toggle}>
                                <FormattedMessage id='good.button.edit'
                                                  defaultMessage='Editar'/>
                                &nbsp;
                                <FontAwesomeIcon icon="edit" className="faIcon"/>
                            </button>
                            <button name="delete" id="Delete" className="btnDelete" onClick={deleteGood}>
                                <FormattedMessage id='good.button.remove'
                                                  defaultMessage='Esborrar'/>
                                &nbsp;
                                <FontAwesomeIcon icon="trash-alt" className="faIcon"/>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
    )
};

Good.propTypes = {
    good: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        discountType: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
        category: PropTypes.number.isRequired,
        reusePeriod: PropTypes.number.isRequired,
        initialPrice: PropTypes.number.isRequired,
        pendingUnits: PropTypes.number.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        goodsActions: PropTypes.object.isRequired,
        modalActions: PropTypes.object.isRequired,
    }).isRequired,
};

export default Good