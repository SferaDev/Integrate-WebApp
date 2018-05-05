import {Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import React from 'react';
import {cloudinaryUploadImg} from '../../api/cloudinary';

class ModalView extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.modal.good) {
            if (nextProps.modal.good.productName !== this.state.productName) this.setState({productName: nextProps.modal.good.productName})
            if (nextProps.modal.good.picture !== this.state.picture) this.setState({picture: nextProps.modal.good.picture})
            if (nextProps.modal.good.discountType !== this.state.discountType) this.setState({discountType: nextProps.modal.good.discountType})
            if (nextProps.modal.good.discount !== this.state.discount) this.setState({discount: nextProps.modal.good.discount})
            if (nextProps.modal.good.category !== this.state.category) this.setState({category: nextProps.modal.good.category})
            if (nextProps.modal.good.reusePeriod !== this.state.reusePeriod) this.setState({reusePeriod: nextProps.modal.good.reusePeriod})
            if (nextProps.modal.good.initialPrice !== this.state.initialPrice) this.setState({initialPrice: nextProps.modal.good.initialPrice})
            if (nextProps.modal.good.pendingUnits !== this.state.pendingUnits) this.setState({pendingUnits: nextProps.modal.good.pendingUnits})
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            productName: '',
            picture: 'http://www.asiaoceania.org/aogs2018/img/no_uploaded.png',
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
        this.handleChangePendingUnits = this.handleChangePendingUnits.bind(this);
    }

    toggle = () => {
        this.props.actions.modalActions.dispatchCleanModalState()

        this.setState({
            productName: '',
            picture: '',
            discountType: '%',
            discount: '0',
            category: 'Aliments',
            reusePeriod: '1',
            initialPrice: '0',
            pendingUnits: '',
            maxEurosDiscount: '0',
        })

        this.props.actions.modalActions.dispatchToggleModal()
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

    handleChangePicture = () => {
        const file = document.getElementById('pictureFile').files[0]
        const imgPreview = document.getElementById('imgPreview')

        cloudinaryUploadImg({file})
            .then(resultUrl => {
                imgPreview.src = resultUrl
                this.setState({picture: resultUrl})
            })
    }

    handleChangePendingUnits = (event) => {
        this.setState({pendingUnits: event.target.value})
    }

    handleSubmit = () => {
        let goodToAddOrEdit;
        if (this.state.productName === undefined || this.state.productName === '') alert('Has d\'assignar un nom al val!');
        else if (!this.props.modal.good) {
            goodToAddOrEdit = {
                productName: this.state.productName,
                picture: this.state.picture,
                discountType: this.state.discountType,
                discount: this.state.discount,
                category: this.state.category,
                reusePeriod: this.state.reusePeriod,
                initialPrice: this.state.initialPrice,
                pendingUnits: this.state.pendingUnits,
            }
            this.props.actions.goodsActions.dispatchAddGood(goodToAddOrEdit)
            this.toggle()
        }
        else {
            goodToAddOrEdit = {
                id: this.props.modal.good.id,
                productName: this.state.productName,
                picture: this.state.picture,
                discountType: this.state.discountType,
                discount: this.state.discount,
                category: this.state.category,
                reusePeriod: this.state.reusePeriod,
                initialPrice: this.state.initialPrice,
                pendingUnits: this.state.pendingUnits,
            }
            this.props.actions.goodsActions.dispatchEditGood(goodToAddOrEdit)
            this.toggle()
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.modal.isOpen} toggle={this.toggle} id="formModal">
                <ModalHeader toggle={this.toggle}>Gestió de vals de descompte</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="couponName">Nom del val</Label>
                            <Input type="text" name="goodName" id="goodName" onChange={this.handleChangeProductName}
                                   value={this.state.productName}
                            />
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
                            <Col sm="6">
                                <Label for="discount">Descompte</Label>
                            </Col>
                            <Col sm="6">
                                <Label for="discount">Unitats restants</Label>
                            </Col>
                            <Col sm="3">
                                <Input type="number" name="discount" id="discount"
                                       min='0'
                                       max={
                                           this.state.discountType === '%' ? '100' : this.state.maxEurosDiscount
                                       }
                                       step={this.state.discountType === '%' ? '1' : '.01'}
                                       onChange={this.handleChangeDiscount}
                                       value={this.state.discount}/>
                            </Col>
                            <Col sm="3">
                                <Input type="select" name="discountType" id="discountType"
                                       onChange={this.handleChangeDiscountType} value={this.state.discountType}>
                                    <option>%</option>
                                    <option>€</option>
                                </Input>
                            </Col>
                            <Col sm="6">
                                <Input required type="number" name="pendingUnits" id="pendingUnits" min="0"
                                       onChange={this.handleChangePendingUnits} value={this.state.pendingUnits}/>
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
                        <FormGroup row>
                            <Col sm="8">
                                <Label for="File">Imatge</Label>
                                <Input type="file" name="file" id="pictureFile" onChange={this.handleChangePicture}/>
                            </Col>
                            <Col sm="4">
                                <img id="imgPreview" alt="preview" src={this.state.picture}/>
                            </Col>
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
    modal: PropTypes.shape(
        {
            isOpen: PropTypes.bool.isRequired,
            good: PropTypes.object,
        }
    ).isRequired,
    actions: PropTypes.shape({
        goodsActions: PropTypes.object.isRequired,
        modalActions: PropTypes.object.isRequired,
    }).isRequired,

}

export default ModalView