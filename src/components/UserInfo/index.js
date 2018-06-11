import React from 'react';
import './style.css';
import picture from '../../media/marketicon.png';
import PropTypes from 'prop-types';

export default class UserInfo extends React.Component {

    render() {
        if (this.props.user.picture === 'picture') {
            this.props.user.picture = picture;
        }
        return (
            <div className="UserInfo">
                <img className="PictureUser" src={this.props.user.picture} alt="Medal"/>
                <h3 className="Name">{this.props.user.name}</h3>
                <h5 className="addressName">{this.props.user.addressName}</h5>
                <hr/>
                <h5 className="Description">{this.props.user.description}</h5>
            </div>
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