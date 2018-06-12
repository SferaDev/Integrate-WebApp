import React from 'react';
import './style.css';
import picture from '../../media/marketicon.png';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        if (this.props.user.picture === 'picture') {
            this.props.user.picture = picture;
        }

        const userInfoPictureStyle = {
            background: 'url(' + this.props.user.picture + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }

        return (
            <Container fluid={true} className='userInfo'>
                <Row>
                    <Col sm='12'>
                        <div className="userInfoPicture" style={userInfoPictureStyle}>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <div className="userTextInfo">
                            <div className="name">{this.props.user.name}</div>
                            <div className="addressName">{this.props.user.addressName}</div>
                            <div className="validationCode">
                                <span className='validationCodeTitle'>
                                     <FormattedMessage id='entity.validationCode'
                                                       defaultMessage='Codi de validació'/>
                                </span>
                                <span className='userValidationCode'>
                                    {this.props.user.validationCode}
                                </span>
                                </div>
                            <hr/>
                            <div className="description">{this.props.user.description}</div>

                            <div className="deleteEntityButton">
                                <button name="edit" id="edit" className="btnDeleteEntity" onClick={this.toggle}>
                                    <div className='deleteEntityButtonText'>
                                        <FormattedMessage id='entity.deleteButton'
                                                          defaultMessage='Esborrar entitat'/>
                                        &nbsp;
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className='modalDeleteEntity'>
                    <ModalHeader toggle={this.toggle}>Esborrar l'entitat</ModalHeader>
                    <ModalBody>
                        <p>Estàs segur de que vols esborrar l'entitat del sistema?</p>
                        <p>Si ho fas, perdràs tots els vals de descompte que tens actius, i els beneficiaris ja no els podran utilitzar.</p>
                        <p>A més, si vols tornar hauràs perdut tota la reputació i popularitat que hagis acumulat en el sistema.</p>
                    </ModalBody>
                    <ModalFooter className='modalFooter'>
                        <div className="deleteEntityButtonModal">
                            <button name="edit" id="edit" className="btnDeleteEntityModal" onClick={this.props.actions.deleteEntity}>
                                <div className='deleteEntityButtonText'>
                                    <FormattedMessage id='entity.deleteButton'
                                                      defaultMessage='Esborrar entitat'/>
                                    &nbsp;
                                </div>
                            </button>
                        </div>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

UserInfo.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        addressName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        validationCode: PropTypes.string.isRequired,
    }).isRequired,

    actions: PropTypes.object.isRequired,
};