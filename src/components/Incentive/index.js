import React from 'react';
import './style.css';
import {FormattedMessage} from 'react-intl';
import bronze from '../../media/bronzemedal.png';
import silver from '../../media/silvermedal.jpeg';
import gold from '../../media/goldmedal.jpeg';

const goldM = gold;
const silverM = silver;
const bronzeM = bronze;
const text = "TextRed"


export default class Incentive extends React.Component {

    render() {
        return (
            <div className="Incentive">
                <img className="medal" src={silverM} alt="Medal"/>
                <h3 className={text}>Vals</h3>
                <img className="medalMiddle" src={goldM} alt="Medal"/>
                <h3 className="TextRedMiddle">Beneficiaris</h3>
                <img className="medalRight" src={bronzeM} alt="Medal"/>
                <h3 className="TextRedRight">Descompte</h3>
            </div>
        );
    }


}


