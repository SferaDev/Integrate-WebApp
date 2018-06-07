import React from 'react';
import './style.css';
import {FormattedMessage} from 'react-intl';
import bronze from '../../media/bronzemedal.png';
import silver from '../../media/silvermedal.jpeg';
import gold from '../../media/goldmedal.jpeg';
import PropTypes from 'prop-types';

const goldM = gold;
const silverM = silver;
const bronzeM = bronze;
let lefttext, middletext, righttext, leftmedal, middlemedal, rightmedal;
let medalleft, medalmiddle, medalright;

export default class Incentive extends React.Component {
    setLeftText() {
        if (this.props.incentives.goodsCreated < 5) {
            lefttext = "NormalText NormalTextLeft";
            medalleft = "medalHidden medalLeftHidden";
        }

        else if (this.props.incentives.goodsCreated >=5 && this.props.incentives.goodsCreated < 50) {
            lefttext = "BronzeText BronzeTextLeft";
            leftmedal = bronzeM;
            medalleft = "medal medalLeft";
        }

        else if (this.props.incentives.goodsCreated >= 50 && this.props.incentives.goodsCreated < 500) {
            lefttext = "SilverText SilverTextLeft";
            leftmedal = silverM;
            medalleft = "medal medalLeft";
        }

        else {
            lefttext = "GoldenText GoldenTextLeft";
            leftmedal = goldM;
            medalleft = "medal medalLeft";
        }
    }

    setMiddleText() {
        if (this.props.incentives.beneficiariesHelped < 5) {
            middletext = "NormalTextMiddle";
            medalmiddle = "medalHidden medalMiddleHidden";
        }

        else if (this.props.incentives.beneficiariesHelped >=5 && this.props.incentives.beneficiariesHelped < 50) {
            middletext = "BronzeTextMiddle";
            middlemedal = bronzeM;
            medalmiddle = "medal medalMiddle";
        }

        else if (this.props.incentives.beneficiariesHelped >= 50 && this.props.incentives.beneficiariesHelped < 500) {
            middletext = "SilverTextMiddle";
            middlemedal = silverM;
            medalmiddle = "medal medalMiddle";
        }

        else {
            middletext = "GoldenTextMiddle";
            middlemedal = goldM;
            medalmiddle = "medal medalMiddle";
        }
    }

    setRightText() {
        if (this.props.incentives.totalSavedMoney < 5) {
            righttext = "NormalTextRight";
            medalright = "medalHidden medalRightHidden";
        }

        else if (this.props.incentives.totalSavedMoney >=5 && this.props.incentives.totalSavedMoney < 50) {
            righttext = "BronzeTextRight";
            rightmedal = bronzeM;
            medalright = "medal medalRight";
        }

        else if (this.props.incentives.totalSavedMoney >= 50 && this.props.incentives.totalSavedMoney < 500) {
            righttext = "SilverTextRight";
            rightmedal = silverM;
            medalright = "medal medalRight";
        }

        else {
            righttext = "GoldenTextRight";
            rightmedal = goldM;
            medalright = "medal medalRight";
        }
    }

    render() {
        this.setRightText();
        this.setMiddleText();
        this.setLeftText();

        return (
            <div className="Incentive">
                <img className={medalleft} src={leftmedal} alt="Medal"/>
                <h3 className={lefttext}><span className='leftTextValue'>{this.props.incentives.goodsCreated}</span>
                    <FormattedMessage id='incentive.goods' defaultMessage='Vals'/>
                </h3>
                <img className={medalmiddle} src={middlemedal} alt="Medal"/>
                <h3 className={middletext}><span className='middleTextValue'>{this.props.incentives.beneficiariesHelped}</span>
                    <FormattedMessage id='incentive.beneficiaris' defaultMessage='Beneficiaris'/>
                </h3>
                <img className={medalright} src={rightmedal} alt="Medal"/>
                <h3 className={righttext}><span className='rightTextValue'>{this.props.incentives.totalSavedMoney}</span>
                    <FormattedMessage id='incentive.discount' defaultMessage='Descomptes'/>
                </h3>
            </div>
        );
    }
}

Incentive.propTypes = {
    incentives: PropTypes.shape({
        goodsCreated: PropTypes.number.isRequired,
        beneficiariesHelped: PropTypes.number.isRequired,
        totalSavedMoney: PropTypes.number.isRequired,
    }).isRequired,
};


