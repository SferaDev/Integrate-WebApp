import React from 'react';
import Statistics, {getFormattedDate, getFormattedData, getLabel, getTicks} from "./";
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';

enzyme.configure({adapter: new Adapter()});


test('getFormattedDate should format date correctly', () => {
    expect(getFormattedDate('2018-06-06')).toEqual('6/6/18');

    expect(getFormattedDate('2018-10-07')).toEqual('7/10/18');

    expect(getFormattedDate('2018-06-10')).toEqual('10/6/18');

    expect(getFormattedDate('2018-10-10')).toEqual('10/10/18');
});

test('getFormattedData should format data correctly', () => {
    expect(getFormattedData([])).toEqual([{data: []}]);
    expect(getFormattedData([['2018-06-06', 10]])).toEqual([{data: [10]}]);
    expect(getFormattedData([['2018-06-06', 5], ['2018-06-07', 8], ['2018-06-08', 3]])).toEqual([{data: [5, 8, 3]}]);
});

test('getLabel should get label correctly', () => {
    expect(getLabel({
        point: {
            y: 10
        }
    })).toEqual(10);

    expect(getLabel({
        point: {
            y: 20
        }
    })).toEqual(20);
});

test('Statistics should render correctly', () => {
    const statistics = shallow(<Statistics data={[]}/>);

    expect(statistics.find('div').length).toEqual(1);
    expect(statistics.find('Chart').length).toEqual(1);
    expect(statistics.find('Bars').length).toEqual(1);
    expect(statistics.find('Labels').length).toEqual(1);
    expect(statistics.find('Ticks').length).toEqual(1);
});

test('<Statistics />', () => {
    const series = [
        {
            data: ['year', 'month', 'day']
        }
    ];

    const wrapper = enzyme.shallow(<Statistics data={series}/>);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('Chart').length).toEqual(1);
    expect(wrapper.find('Ticks').length).toEqual(1);
    expect(wrapper.find('Bars').length).toEqual(1);
    const labels = wrapper.find('Labels').prop('label');
    const point = {
        y: 2
    };
    expect(labels({point})).toEqual(2);
});