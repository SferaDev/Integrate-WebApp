import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Good from '../Good';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Col, Container, Row} from 'reactstrap';

const GoodsList = ({goods, modal, actions}) => {
    const Goods = (
        goods.map(good =>
            <Good
                key={good.id}
                good={good}
                actions={actions}
            />
        )
    )

    const toggle = () => {
        actions.dispatchToggleModal()
    }

    return (
        <div>
            <Container className="goodsList" fluid={true}>
                <Row>
                    <Col sm="12">
                        {Goods}
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="stickyAddGood">
                        <button className="stickyAddGoodButton" onClick={toggle}>
                            <FontAwesomeIcon icon="plus-circle" className="plus-circle"/>
                            <span className="addGoodText">Afegir un val de descompte</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

GoodsList.propTypes = {
    goods: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
}

export default GoodsList