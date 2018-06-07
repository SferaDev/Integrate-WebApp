import React from 'react'
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import {expect} from 'chai';
import Incentive from './index';
import {lefttext,middletext, righttext, leftmedal, middlemedal, rightmedal, medalleft, medalmiddle, medalright} from "./index";

describe('<Incentive />', () => {
    it('renders a <img /> and <h3/> components', () => {
        const wrapper = enzyme.shallow(<Incentive/>);
        expect(wrapper.find('img')).length(3);
        expect(wrapper.find('h3')).length(3);
    });

    it('goods incentive', () => {
        const wrapper = enzyme.shallow(<Incentive/>);
        //No medal
        wrapper.setState({goodsCreated: 4});
        expect(lefttext).to.equal("NormalText");
        expect(medalleft).to.equal("medalHidden");

        //BronzeMedal
        wrapper.setState({goodsCreated: 35});
        expect(lefttext).to.equal("BronzeText");
        expect(medalleft).to.equal("medal");
        expect(leftmedal).to.equal("bronzemedal.png");

        //SilverMedal
        wrapper.setState({goodsCreated: 100});
        expect(lefttext).to.equal("SilverText");
        expect(medalleft).to.equal("medal");
        expect(leftmedal).to.equal("silvermedal.jpeg");

        //GoldenMedal
        wrapper.setState({goodsCreated: 550});
        expect(lefttext).to.equal("GoldenText");
        expect(medalleft).to.equal("medal");
        expect(leftmedal).to.equal("goldmedal.jpeg");

    });

    it('beneficiarieshelped incentive', () => {
        const wrapper = enzyme.shallow(<Incentive/>);
        //No medal
        wrapper.setState({beneficiariesHelped: 4});
        expect(middletext).to.equal("NormalTextMiddle");
        expect(medalmiddle).to.equal("medalHidden");

        //BronzeMedal
        wrapper.setState({beneficiariesHelped: 35});
        expect(middletext).to.equal("BronzeTextMiddle");
        expect(medalmiddle).to.equal("medalMiddle");
        expect(middlemedal).to.equal("bronzemedal.png");

        //SilverMedal
        wrapper.setState({beneficiariesHelped: 100});
        expect(middletext).to.equal("SilverTextMiddle");
        expect(medalmiddle).to.equal("medalMiddle");
        expect(middlemedal).to.equal("silvermedal.jpeg");

        //GoldenMedal
        wrapper.setState({beneficiariesHelped: 550});
        expect(middletext).to.equal("GoldenTextMiddle");
        expect(medalmiddle).to.equal("medalMiddle");
        expect(middlemedal).to.equal("goldmedal.jpeg");

    });

    it('totalsavedmoney incentive', () => {
        const wrapper = enzyme.shallow(<Incentive/>);
        //No medal
        wrapper.setState({totalSavedMoney: 4});
        expect(righttext).to.equal("NormalTextRight");
        expect(medalright).to.equal("medalHidden");

        //BronzeMedal
        wrapper.setState({totalSavedMoney: 35});
        expect(righttext).to.equal("BronzeTextRight");
        expect(medalright).to.equal("medalRight");
        expect(rightmedal).to.equal("bronzemedal.png");

        //SilverMedal
        wrapper.setState({totalSavedMoney: 100});
        expect(righttext).to.equal("SilverTextRight");
        expect(medalright).to.equal("medalRight");
        expect(rightmedal).to.equal("silvermedal.jpeg");

        //GoldenMedal
        wrapper.setState({totalSavedMoney: 550});
        expect(righttext).to.equal("GoldenTextRight");
        expect(medalright).to.equal("medalRight");
        expect(rightmedal).to.equal("goldmedal.jpeg");

    });


});