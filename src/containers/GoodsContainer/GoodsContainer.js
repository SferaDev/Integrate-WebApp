import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import bindActionCreators from 'redux/es/bindActionCreators';
import * as GoodsActions from '../../actions/goods'
import * as ModalActions from '../../actions/modal'
import ModalView from '../../components/ModalView';
import GoodsList from '../../components/GoodsList';
import './style.css';

class GoodsContainer extends Component {
    componentDidMount() {
        this.props.actions.goodsActions.dispatchReceiveGoods()
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {goods, actions, modal} = this.props;
        return (
            <div className="goodsContainer">
                <GoodsList
                    goods={goods} actions={actions}/>
                <ModalView modal={modal} actions={actions}/>
            </div>
        )
    }
}

GoodsContainer.propTypes = {
    goods: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        discountType: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
        category: PropTypes.number.isRequired,
        reusePeriod: PropTypes.number.isRequired,
        initialPrice: PropTypes.number.isRequired,
        pendingUnits: PropTypes.number.isRequired,
        currentPrice: PropTypes.number,
    })),
    modal: PropTypes.shape(
        {
            isOpen: PropTypes.bool.isRequired,
            good: PropTypes.object,
        }
    ).isRequired,
    actions: PropTypes.shape({
        modalActions: PropTypes.object.isRequired,
        goodsActions: PropTypes.object.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    goods: state.goods,
    modal: state.modal
});

const mapDispatchToProps = dispatch => ({
    actions: {
        goodsActions: bindActionCreators(GoodsActions, dispatch),
        modalActions: bindActionCreators(ModalActions, dispatch)
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoodsContainer)