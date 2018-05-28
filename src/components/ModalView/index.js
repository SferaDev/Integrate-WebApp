import {Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import React from 'react';
import {cloudinaryUploadImg} from '../../api/cloudinary';
import {FormattedMessage} from 'react-intl';

class ModalView extends React.Component {

    toggle = () => {
        this.props.actions.modalActions.dispatchCleanModalState();

        this.setState({
            productName: '',
            picture: 'http://www.asiaoceania.org/aogs2018/img/no_uploaded.png',
            discountType: '%',
            discount: 0,
            category: 1,
            reusePeriod: 1,
            initialPrice: 0,
            pendingUnits: 1,
            maxEurosDiscount: 0,
        });

        this.props.actions.modalActions.dispatchToggleModal()
    };
    handleChangeProductName = (event) => {
        this.setState({productName: event.target.value})
    };
    handleChangeInitialPrice = (event) => {
        this.setState({initialPrice: event.target.value});
        this.setState({maxEurosDiscount: event.target.value})
    };
    handleChangeDiscount = (event) => {
        this.setState({discount: event.target.value})
    };
    handleChangeDiscountType = (event) => {
        this.setState({discountType: event.target.value});
        event.target.value === '%' ?
            this.setState({discount: Math.min(100, parseFloat(this.state.discount))}) :
            this.setState({discount: Math.min(parseFloat(this.state.initialPrice), parseFloat(this.state.discount))})
    };
    handleChangeReusePeriod = (event) => {
        this.setState({reusePeriod: event.target.value})
    };
    handleChangeCategory = (event) => {
        this.setState({category: event.target.value})
    };
    handleChangePicture = () => {
        const file = document.getElementById('pictureFile').files[0];
        const imgPreview = document.getElementById('imgPreview');

        cloudinaryUploadImg({file})
            .then(resultUrl => {
                imgPreview.src = resultUrl;
                this.setState({picture: resultUrl})
            })
    };
    handleChangePendingUnits = (event) => {
        this.setState({pendingUnits: event.target.value})
    };
    handleSubmit = () => {
        let goodToAddOrEdit;
        if (this.state.productName === undefined || this.state.productName === '')
            alert('Has d\'assignar un nom al val!');
        else if (parseFloat(this.state.initialPrice) < 0)
            alert('El preu original no pot ser negatiu')
        else if (parseFloat(this.state.discount) < 0)
            alert('El descompte ha de tenir un valor positiu')
        else if (this.state.discountType === '%' && parseInt(this.state.discount, 10) >= 100)
            alert('El descompte ha de tenir un valor menor que 99')
        else if (parseInt(this.state.pendingUnits, 10) <= 0)
            alert('El valor d\'unitats pendents ha de ser positiu')
        else if (parseInt(this.state.reusePeriod < 0, 10))
            alert('El període de reutilització ha de ser positiu')
        else if (this.state.discountType === '€' && parseFloat(this.state.discount) >= parseFloat(this.state.initialPrice))
            alert('El descompte ha de ser inferior al preu original')
        else if (!Number.isInteger(parseFloat(this.state.pendingUnits)))
            alert('El valor d\'unitats pendents no pot ser decimal')
        else if (!Number.isInteger(parseFloat(this.state.reusePeriod)))
            alert('El valor d\'unitats pendents no pot ser decimal')

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
            };
            this.props.actions.goodsActions.dispatchAddGood(goodToAddOrEdit);
            this.toggle()
        }
        else {
            goodToAddOrEdit = {
                _id: this.props.modal.good._id,
                productName: this.state.productName,
                picture: this.state.picture,
                discountType: this.state.discountType,
                discount: this.state.discount,
                category: this.state.category,
                reusePeriod: this.state.reusePeriod,
                initialPrice: this.state.initialPrice,
                pendingUnits: this.state.pendingUnits,
            };
            this.props.actions.goodsActions.dispatchEditGood(goodToAddOrEdit);
            this.toggle()
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            productName: '',
            picture: 'http://www.asiaoceania.org/aogs2018/img/no_uploaded.png',
            discountType: '%',
            discount: 0,
            category: 1,
            reusePeriod: 1,
            initialPrice: 0,
            pendingUnits: 0,
            maxEurosDiscount: 0,
        };

        this.handleChangeProductName = this.handleChangeProductName.bind(this);
        this.handleChangeInitialPrice = this.handleChangeInitialPrice.bind(this);
        this.handleChangeDiscount = this.handleChangeDiscount.bind(this);
        this.handleChangeDiscountType = this.handleChangeDiscountType.bind(this);
        this.handleChangeReusePeriod = this.handleChangeReusePeriod.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangePicture = this.handleChangePicture.bind(this);
        this.handleChangePendingUnits = this.handleChangePendingUnits.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modal.good) {
            if (nextProps.modal.good.productName !== this.state.productName) this.setState({productName: nextProps.modal.good.productName});
            if (nextProps.modal.good.picture !== this.state.picture) this.setState({picture: nextProps.modal.good.picture});
            if (nextProps.modal.good.discountType !== this.state.discountType) this.setState({discountType: nextProps.modal.good.discountType});
            if (nextProps.modal.good.discount !== this.state.discount) this.setState({discount: nextProps.modal.good.discount});
            if (nextProps.modal.good.category !== this.state.category) this.setState({category: nextProps.modal.good.category});
            if (nextProps.modal.good.reusePeriod !== this.state.reusePeriod) this.setState({reusePeriod: nextProps.modal.good.reusePeriod});
            if (nextProps.modal.good.initialPrice !== this.state.initialPrice) this.setState({initialPrice: nextProps.modal.good.initialPrice});
            if (nextProps.modal.good.pendingUnits !== this.state.pendingUnits) this.setState({pendingUnits: nextProps.modal.good.pendingUnits})
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.modal.isOpen} toggle={this.toggle} id="formModal">
                <ModalHeader toggle={this.toggle}>
                    <FormattedMessage id='modal.goodsManagement'
                                      defaultMessage='Descompte aplicat'/>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="couponName">
                                <FormattedMessage id='modal.goodName'
                                                  defaultMessage='Nom del producte'/>
                            </Label>
                            <Input type="text" className="goodName" id="goodName" onChange={this.handleChangeProductName}
                                   value={this.state.productName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="initialPrice">
                                <FormattedMessage id='modal.originalPrice'
                                                  defaultMessage='Preu original (€)'/>
                            </Label>
                            <Input type="number" className="initialPrice" id="initialPrice"
                                   min={
                                       this.state.discountType === '%' ? '0' :
                                           this.state.discount
                                   }
                                   step=".01" onChange={this.handleChangeInitialPrice} value={this.state.initialPrice}/>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="6">
                                <Label for="discount">
                                    <FormattedMessage id='modal.discount'
                                                      defaultMessage='Descompte'/>
                                </Label>
                            </Col>
                            <Col sm="6">
                                <Label for="discount">
                                    <FormattedMessage id='good.pendingUnits'
                                                      defaultMessage='Unitats restants'/>
                                </Label>
                            </Col>
                            <Col sm="3">
                                <Input type="number" className="discount" id="discount"
                                       min='0'
                                       max={
                                           this.state.discountType === '%' ? '100' : this.state.maxEurosDiscount
                                       }
                                       step={this.state.discountType === '%' ? '1' : '.01'}
                                       onChange={this.handleChangeDiscount}
                                       value={this.state.discount}/>
                            </Col>
                            <Col sm="3">
                                <Input type="select" className="discountType" id="discountType"
                                       onChange={this.handleChangeDiscountType} value={this.state.discountType}>
                                    <option>%</option>
                                    <option>€</option>
                                </Input>
                            </Col>
                            <Col sm="6">
                                <Input required type="number" className="pendingUnits" id="pendingUnits" min="0"
                                       onChange={this.handleChangePendingUnits} value={this.state.pendingUnits}/>
                            </Col>
                            <Col sm="12" className="currentPrice">
                                <FormattedMessage id='good.currentPrice'
                                                  defaultMessage='Preu final'/>
                                :&nbsp;
                                {
                                    this.state.discountType === '%' ?
                                        (parseFloat(this.state.initialPrice) - parseFloat(this.state.initialPrice) * parseFloat(this.state.discount) / 100).toFixed(2) :
                                        (parseFloat(this.state.initialPrice) - parseFloat(this.state.discount)).toFixed(2)
                                }
                                &nbsp;€
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="6">
                                <Label for="reusePeriod">
                                    <FormattedMessage id='modal.periodicity'
                                                      defaultMessage='Periodicitat (dies)'/>
                                </Label>
                                <Input required type="number" className="reusePeriod" id="reusePeriod" min="0"
                                       onChange={this.handleChangeReusePeriod} value={this.state.reusePeriod}/>
                            </Col>
                            <Col sm="6">
                                <Label for="category">
                                    <FormattedMessage id='good.category'
                                                      defaultMessage='Categoria'/>
                                </Label>
                                <Input required type="select" className="category" id="category"
                                       onChange={this.handleChangeCategory} value={this.state.category}>
                                    <FormattedMessage id='good.category.nutrition' defaultMessage='Nutrició' key={1}>
                                        {(message) => <option value="1">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.culture' defaultMessage='Cultura' key={2}>
                                        {(message) => <option value="2">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.education' defaultMessage='Formació' key={3}>
                                        {(message) => <option value="3">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.mobility' defaultMessage='Mobilitat' key={4}>
                                        {(message) => <option value="4">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.technology' defaultMessage='Tecnologia' key={5}>
                                        {(message) => <option value="5">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.healthcare' defaultMessage='Salut' key={6}>
                                        {(message) => <option value="6">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.sports' defaultMessage='Esports' key={7}>
                                        {(message) => <option value="7">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.leisure' defaultMessage='Lleure' key={8}>
                                        {(message) => <option value="8">{message}</option>}
                                    </FormattedMessage>
                                    <FormattedMessage id='good.category.others' defaultMessage='Altres' key={9}>
                                        {(message) => <option value="9">{message}</option>}
                                    </FormattedMessage>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="8">
                                <Label for="File">
                                    <FormattedMessage id='modal.image'
                                                      defaultMessage='Imatge'/>
                                </Label>
                                <Input type="file" className="file" id="pictureFile" onChange={this.handleChangePicture}/>
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

};

export default ModalView