import {Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import React from 'react';

class ModalView extends React.Component {
    constructor(props) {
        super(props);

        this.props.coupon !== undefined ? this.state = this.props.coupon : this.state = {
            productName: '',
            picture: '',
            discountType: '%',
            discount: '0',
            category: 'Aliments',
            reusePeriod: '1',
            initialPrice: '0',
            pendingUnits: '',
            maxEurosDiscount: '0',
        }


        this.handleChangeProductName = this.handleChangeProductName.bind(this);
        this.handleChangeInitialPrice = this.handleChangeInitialPrice.bind(this);
        this.handleChangeDiscount = this.handleChangeDiscount.bind(this);
        this.handleChangeDiscountType = this.handleChangeDiscountType.bind(this);
        this.handleChangeReusePeriod = this.handleChangeReusePeriod.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangePicture = this.handleChangePicture.bind(this);
    }

    toggle = () => {
        this.props.coupon === undefined ?
            this.props.actions.dispatchToggleModalAddCoupon() :
            this.props.actions.dispatchToggleModalEditCoupon()
    }


    handleChangeProductName = (event) => {
        this.setState({productName: event.target.value})
    }


    handleChangeInitialPrice = (event) => {
        this.setState({initialPrice: event.target.value})
        this.setState({maxEurosDiscount: event.target.value})
    }

    handleChangeDiscount = (event) => {
        this.setState({discount: event.target.value})
    }

    handleChangeDiscountType = (event) => {
        this.setState({discountType: event.target.value})
        event.target.value === '%' ?
            this.setState({discount: Math.min(100, parseFloat(this.state.discount)).toString()}) :
            this.setState({discount: Math.min(parseFloat(this.state.initialPrice), parseFloat(this.state.discount)).toString()})
    }

    handleChangeReusePeriod = (event) => {
        this.setState({reusePeriod: event.target.value})
    }

    handleChangeCategory = (event) => {
        this.setState({category: event.target.value})
    }

    handleChangePicture = (event) => {
        this.setState({picture: event.target.value})
    }

    handleSubmit = () => {
        if (this.state.productName === undefined || this.state.productName === '') alert('Has d\'assignar un nom al val!');
        else if (this.props.coupon === undefined) {
            this.props.actions.addCoupon(this.state.productName, this.state.picture, this.state.discountType, this.state.discount, this.state.category,
                this.state.reusePeriod, this.state.initialPrice, this.state.pendingUnits)
            this.toggle()
        }
        else {
            this.props.actions.editCoupon(this.props.coupon.id, this.state.productName, this.state.picture, this.state.discountType, this.state.discount, this.state.category,
                this.state.reusePeriod, this.state.initialPrice, this.state.pendingUnits)
            this.toggle()
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.modal.isOpen} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Gestió de vals de descompte</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="couponName">Nom del val</Label>
                            <Input type="text" name="couponName" id="couponName" onChange={this.handleChangeProductName}
                                   value={this.state.productName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="initialPrice">Preu original (€)</Label>
                            <Input type="number" name="initialPrice" id="initialPrice"
                                   min={
                                       this.state.discountType === '%' ? '0' :
                                           this.state.discount
                                   }
                                   step=".01" onChange={this.handleChangeInitialPrice} value={this.state.initialPrice}/>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="12">
                                <Label for="discount">Descompte</Label>
                            </Col>
                            <Col sm="8">
                                <Input type="number" name="discount" id="discount"
                                       min='0'
                                       max={
                                           this.state.discountType === '%' ? '100' : this.state.maxEurosDiscount
                                       }
                                       step={this.state.discountType === '%' ? '1' : '.01'}
                                       onChange={this.handleChangeDiscount}
                                       value={this.state.discount}/>
                            </Col>
                            <Col sm="4">
                                <Input type="select" name="discountType" id="discountType"
                                       onChange={this.handleChangeDiscountType} value={this.state.discountType}>
                                    <option>%</option>
                                    <option>€</option>
                                </Input>
                            </Col>
                            <Col sm="12" className="currentPrice">
                                Preu final:&nbsp;
                                {
                                    this.state.discountType === '%' ?
                                        (parseFloat(this.state.initialPrice) - parseFloat(this.state.initialPrice) * parseFloat(this.state.discount) / 100).toFixed(2).toString() :
                                        (parseFloat(this.state.initialPrice) - parseFloat(this.state.discount)).toFixed(2).toString()
                                }
                                &nbsp;€
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="6">
                                <Label for="reusePeriod">Periodicitat (dies)</Label>
                                <Input required type="number" name="reusePeriod" id="reusePeriod" min="0"
                                       onChange={this.handleChangeReusePeriod} value={this.state.reusePeriod}/>
                            </Col>
                            <Col sm="6">
                                <Label for="category">Categoria</Label>
                                <Input required type="select" name="category" id="category"
                                       onChange={this.handleChangeCategory} value={this.state.category}>
                                    <option>Aliments</option>
                                    <option>Higiene</option>
                                    <option>Cultura</option>
                                    <option>D'altres</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="picture">Imatge (URL)</Label>
                            <Input required type="url" name="picture" id="picture" value={this.state.picture}
                                   onChange={this.handleChangePicture}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <button className="cancelButton" onClick={this.toggle}>Cancel·lar</button>
                    {' '}
                    <button type="submit" className="validateButton" onClick={this.handleSubmit}>Enviar</button>
                </ModalFooter>
            </Modal>
        );
    }
}

ModalView.propTypes = {
    coupon: PropTypes.object,
    modal: PropTypes.shape(
        {
            isOpen: PropTypes.bool.isRequired,
        }
    ).isRequired,
    actions: PropTypes.object.isRequired,
}

export default ModalView