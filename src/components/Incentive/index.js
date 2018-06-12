import React from 'react';
import './style.css';
import {FormattedMessage} from 'react-intl';
import bronze from '../../media/bronzemedal.png';
import silver from '../../media/silvermedal.jpeg';
import gold from '../../media/goldmedal.jpeg';
import like from '../../media/like.png'
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';

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
            <Row className="incentive">
                <Col sm='12' md='2' className='likeComponent'>
                    <img className="like" id='like' src={like} alt="Medal"/>
                    <div className="NormalText">
                        <span className='likeText'>1</span>
                    </div>
                </Col>

                <Col sm='12' md='3' className='incentiveLeft'>
                    {
                        medalleft !== 'medalHidden medalLeftHidden' ? <img className={medalleft} id='medalLeft' src={leftmedal} alt="Medal"/> :
                            null
                    }
                        <div className={lefttext}><span className='leftTextValue'>{this.props.incentives.goodsCreated}</span>
                            &nbsp;
                            <FormattedMessage id='incentive.goods' defaultMessage='vals creats'/>
                        </div>
                </Col>

                <Col sm='12' md='3' className='incentiveMiddle'>
                    {
                        medalmiddle !== 'medalHidden medalMiddleHidden' ? <img className={medalmiddle} id='medalLeft' src={middlemedal} alt="Medal"/> :
                            null
                    }
                        <div className={middletext}><span className='middleTextValue'>{this.props.incentives.beneficiariesHelped}</span>
                            &nbsp;
                            <FormattedMessage id='incentive.beneficiaris' defaultMessage='beneficiaris ajudats'/>
                        </div>
                </Col>

                <Col sm='12' md='3' className='incentiveRight'>
                    {
                        medalright !== 'medalHidden medalRightHidden' ? <img className={medalright} id='medalRight' src={rightmedal} alt="Medal"/> :
                            null
                    }
                        <div className={righttext}><span className='rightTextValue'>{this.props.incentives.totalSavedMoney}</span>
                            <FormattedMessage id='incentive.discount' defaultMessage='Descomptes'/>
                        </div>
                </Col>
            </Row>
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


