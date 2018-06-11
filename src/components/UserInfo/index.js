import React from 'react';
import './style.css';
import picture from '../../media/marketicon.png';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Col, Container, Row} from 'reactstrap';

export default class UserInfo extends React.Component {

    render() {
        if (this.props.user.picture === 'picture') {
            this.props.user.picture = picture;
        }

        const userInfoPictureStyle = {
            background: 'url(' + this.props.user.picture + ')',
            backgroundSize: 'cover',
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
                            <hr/>
                            <div className="description">{this.props.user.description}</div>

                            <div className="deleteEntityButton">
                                <button name="edit" id="edit" className="btnDeleteEntity">
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
    }).isRequired,

    actions: PropTypes.shape({
        setUser: PropTypes.object.isRequired,
    })
};