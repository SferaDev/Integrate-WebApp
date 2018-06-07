import React from 'react';
import './style.css';
import {FormattedMessage} from 'react-intl';
import bronze from '../../media/bronzemedal.png';
import silver from '../../media/silvermedal.jpeg';
import gold from '../../media/goldmedal.jpeg';
import {apiGetIncentives} from "../../api/incentive";


const goldM = gold;
const silverM = silver;
const bronzeM = bronze;
export let lefttext, middletext, righttext, leftmedal, middlemedal, rightmedal, medalleft, medalmiddle, medalright;

export default class Incentive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goodsCreated: '',
            beneficiariesHelped: '',
            totalSavedMoney: ''
        };

        this.setLeftText = this.setLeftText.bind(this);
        this.setMiddleText = this.setMiddleText.bind(this);
        this.setRightText = this.setRightText.bind(this);
    }

    componentDidMount() {

        apiGetIncentives().then(incentives => {
            this.setState({goodsCreated: incentives.goodsCreated});
            this.setState({beneficiariesHelped: incentives.beneficiariesHelped});
            this.setState({totalSavedMoney: incentives.totalSavedMoney});
        })

    }

    setLeftText() {
        if (this.state.goodsCreated < 5) {
            lefttext = "NormalText";
            medalleft = "medalHidden";
        }
        else if (this.state.goodsCreated >=5 && this.state.goodsCreated < 50) {
            lefttext = "BronzeText";
             medalleft = "medal";
            leftmedal = bronzeM;


        }
        else if (this.state.goodsCreated >= 50 && this.state.goodsCreated < 500) {

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
        if (this.state.beneficiariesHelped < 5) {
            middletext = "NormalTextMiddle";
            medalmiddle = "medalHidden";

        }
        else if (this.state.beneficiariesHelped >=5 && this.state.beneficiariesHelped < 50) {
            middletext = "BronzeTextMiddle";
            middlemedal = bronzeM;
            medalmiddle = "medalMiddle";


        }
        else if (this.state.beneficiariesHelped >= 50 && this.state.beneficiariesHelped < 500) {
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

        if (this.state.totalSavedMoney < 5) {
            righttext = "NormalTextRight";
            medalright = "medalHidden";
        }
        else if (this.state.totalSavedMoney >=5 && this.state.totalSavedMoney < 50) {
            righttext = "BronzeTextRight";
            rightmedal = bronzeM;
            medalright = "medalRight";

        }
        else if (this.state.totalSavedMoney >= 50 && this.state.totalSavedMoney < 500) {
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
                <h3 className={lefttext}>{this.state.goodsCreated}
                    <FormattedMessage id='incentive.goods' defaultMessage='Vals'/>
                </h3>
                <img className={medalmiddle} src={middlemedal} alt="Medal"/>
                <h3 className={middletext}>{this.state.beneficiariesHelped}
                    <FormattedMessage id='incentive.beneficiaris' defaultMessage='Beneficiaris'/>
                </h3>
                <img className={medalright} src={rightmedal} alt="Medal"/>
                <h3 className={righttext}>{this.state.totalSavedMoney}
                    <FormattedMessage id='incentive.discount' defaultMessage='Descomptes'/>
                </h3>
            </div>
        );
    }


}


