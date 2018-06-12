import React from 'react'
import {expect} from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Statistics from "./index";
import {getFormattedDate} from "./index";


enzyme.configure({adapter: new Adapter()});

describe('<Statistics />', () => {

    const series = [
        {
            data: ['year', 'month', 'day']
        }
    ];


    it('renders the correct components', () => {
        const wrapper = enzyme.shallow(<Statistics data={series}/>);
        expect(wrapper.find('div')).length(1);
        expect(wrapper.find('Chart')).length(1);
        expect(wrapper.find('Ticks')).length(1);
        expect(wrapper.find('Bars')).length(1);
        const labels = wrapper.find('Labels').prop('label');
        //const ticks = wrapper.find('Ticks').prop('ticks');
        const point = {
            y: 2
        }
        expect(labels({point})).to.equal(2)

    });

    it('getFromattedDate', () => {
        expect(getFormattedDate(series[0].data[0])).to.equal('//ar')

    });
})