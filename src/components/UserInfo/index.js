import React from 'react';
import './style.css';
import picture from '../../media/marketicon.png';
import PropTypes from 'prop-types';

export default class UserInfo extends React.Component {
    render() {
        return (
            <div className="UserInfo">
                <img className="Picture" src={picture} alt="Medal"/>
                <h3>{this.props.user.name}</h3>
                <h4>{this.props.user.addressName}</h4>
                <hr/>
                <h5>{this.props.user.description}</h5>
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
};