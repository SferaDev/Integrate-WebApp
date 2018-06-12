import React from 'react';
import {Chart, Bars, Labels, Ticks} from 'rumble-charts';
import './style.css';

const getFormattedDate = date => {
    const day = date.slice(8,10);
    const month = date.slice(5,7);
    const year = date.slice(2,4);

    return (day[0] === '0' ? day[1] : day) + '/' + (month[0] === '0' ? month[1] : month) + '/' + year;
}

const Statistics = ({data}) => (
    <div className='statistics'>
        <Chart width={600} height={400} series={[{data: data.map(e => e[1])}]} minY={0}>
            <Bars seriesIndex={0} colors={['#343a40']} innerPadding={10} />

            <Labels
                style={{color: 'red'}}
                label={({point}) => point.y}
                dotStyle={{
                    alignmentBaseline:'after-edge',
                    textAnchor: 'middle',
                    fontFamily:'sans-serif',
                    fill: 'white'
                }}
                labelAttributes={{y: 26}}
            />

            <Ticks
                axis='x'
                ticks={({series}) => series[0].data.map((point, i) => ({
                    x: point.x,
                    label: getFormattedDate(data[i][0])
                }))}
                lineVisible={false}
                labelStyle={{textAnchor:'middle',dominantBaseline:'text-after-edge', fill:'grey', fontFamily: 'sans-serif'}}
                labelAttributes={{y: 25}}
            />
        </Chart>
    </div>
);

export default Statistics