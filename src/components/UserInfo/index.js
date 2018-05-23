import React from 'react';
import './style.css';
import picture from '../../media/marketicon.png';




export default class UserInfo extends React.Component {


    render() {

        return (
            <div className="UserInfo">
                <img className="Picture" src={picture} alt="Medal"/>
                <h3>Nom de l'entitat</h3>
                <h4>Direcció</h4>
                <hr/>
                <h5>Descripció</h5>
            </div>
        );
    }


}

