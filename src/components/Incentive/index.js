import React from 'react';
import './style.css';
import {FormattedMessage} from 'react-intl';
import bronze from '../../media/bronzemedal.png';
import silver from '../../media/silvermedal.jpeg';
import gold from '../../media/goldmedal.jpeg';

const goldM = gold;
const silverM = silver;
const bronzeM = bronze;
let nBen = 10;
let nGoods = 4;
let nDiscount = 30;
let lefttext, middletext, righttext, leftmedal, middlemedal, rightmedal;
let medalleft, medalmiddle, medalright;


export default class Incentive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.setLeftText = this.setLeftText.bind(this);
        this.setMiddleText = this.setMiddleText.bind(this);
        this.setRightText = this.setRightText.bind(this);

    }

    setLeftText() {
        if (nGoods < 5) {
            lefttext = "NormalText";
            medalleft = "medalHidden";
        }
        else if (nGoods >=5 && nGoods < 50) {
            lefttext = "BronzeText";
            leftmedal = bronzeM;
            medalleft = "medal";


        }
        else if (nGoods >= 50 && nGoods < 500) {
            lefttext = "SilverText";
            leftmedal = silverM;
            medalleft = "medal";


        }
        else {
            lefttext = "GoldenText";
            leftmedal = goldM;
            medalleft = "medal";

        }

    }

    setMiddleText() {
        if (nBen < 5) {
            middletext = "NormalTextMiddle";
            medalmiddle = "medalHidden";

        }
        else if (nBen >=5 && nBen < 50) {
            middletext = "BronzeTextMiddle";
            middlemedal = bronzeM;
            medalmiddle = "medalMiddle";


        }
        else if (nBen >= 50 && nBen < 500) {
            middletext = "SilverTextMiddle";
            middlemedal = silverM;
            medalmiddle = "medalMiddle";


        }
        else {
            middletext = "GoldenTextMiddle";
            middlemedal = goldM;
            medalmiddle = "medalMiddle";


        }
    }

    setRightText() {
        if (nDiscount < 5) {
            righttext = "NormalTextRight";
            medalright = "medalHidden";
        }
        else if (nDiscount >=5 && nDiscount < 50) {
            righttext = "BronzeTextRight";
            rightmedal = bronzeM;
            medalright = "medalRight";

        }
        else if (nDiscount >= 50 && nDiscount < 500) {
            righttext = "SilverTextRight";
            rightmedal = silverM;
            medalright = "medalRight";

        }
        else {
            righttext = "GoldenTextRight";
            rightmedal = goldM;
            medalright = "medalRight";

        }
    }


    render() {
        this.setRightText();
        this.setMiddleText();
        this.setLeftText();
        return (
            <div className="Incentive">
                <img className={medalleft} src={leftmedal} alt="Medal"/>
                <h3 className={lefttext}>{nGoods}
                    <FormattedMessage id='incentive.goods' defaultMessage='Vals'/>
                </h3>
                <img className={medalmiddle} src={middlemedal} alt="Medal"/>
                <h3 className={middletext}>{nBen}
                    <FormattedMessage id='incentive.beneficiaris' defaultMessage='Beneficiaris'/>
                </h3>
                <img className={medalright} src={rightmedal} alt="Medal"/>
                <h3 className={righttext}>{nDiscount}
                    <FormattedMessage id='incentive.discount' defaultMessage='Descomptes'/>
                </h3>
            </div>
        );
    }


}


