import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-basic-dist';
import NumberFormat from 'react-number-format';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useResizeDetector } from 'react-resize-detector';
import { Grid, Typography, useTheme } from '@material-ui/core';
// MenuItem, TextField,

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import PropTypes from 'prop-types';
import { gridSpacing } from 'store/constant';

const Plot = createPlotlyComponent(Plotly);

/* const status = [
    {
        value: 'Ten',
        label: 'Ten Years'
    },
    {
        value: 'Twenty',
        label: 'Twenty Years'
    },
    {
        value: 'Thirty',
        label: 'Thirty Years'
    }
]; */

// eslint-disable-next-line react/prefer-stateless-function
const PlotlyChart = ({ isLoading, areaValue, years, propertySize, grainValue, ureaValue }) => {
    // const [value, setValue] = React.useState('Ten');
    const xValuesline = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const xValuesArea = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const [yValuesArea, setyValuesArea] = useState([]);
    const [yValuesLine, setyValuesLine] = useState([]);
    // const [trace1datax, setTrace1datax] = useState([]);
    // const [i, seti] = useState(0);
    // console.log(years);
    const seperatorOn = true;
    const cost = -Math.abs((propertySize / 500) * 7756);
    const costErr = 7756 * 0.5;
    const ongoingCost = -Math.abs((propertySize / 500) * 172);
    const ureaApplied = 65;
    const additionalYield = 0.5;
    const hayPrice = 200;
    const extraIncomeWet = additionalYield * grainValue;
    // console.log(extraIncomeWet);
    const extraCost = ureaApplied * (ureaValue / 1000);
    // console.log(extraCost);
    const netGain = extraIncomeWet - extraCost;
    // console.log(netGain);
    const totalNetGain = netGain * areaValue;
    // console.log('total net gain');
    // console.log(totalNetGain);
    // use switch or lookup table function to calculate the Y Values
    useEffect(() => {
        const newArr = [];
        years.map((year, index) => {
            console.log(years);
            switch (year.value) {
                case 'wet':
                    if (index === 0) {
                        newArr[index] = Math.round(cost + totalNetGain);
                    } else {
                        newArr[index] = Math.round(newArr[index - 1] + ongoingCost + totalNetGain);
                    }
                    return null;
                case 'dry':
                    if (index === 0) {
                        newArr[index] = Math.round(cost);
                    } else {
                        newArr[index] = Math.round(newArr[index - 1] + ongoingCost);
                    }
                    return null;
                default:
                    if (index === 0) {
                        newArr[index] = Math.round(cost);
                    } else {
                        newArr[index] = Math.round(newArr[index - 1] + ongoingCost);
                    }
                    return null;
            }
        });
        // console.log(newArr);
        setyValuesLine(newArr);
        setyValuesArea([
            newArr[0] + costErr,
            newArr[1] + costErr,
            newArr[2] + costErr,
            newArr[3] + costErr,
            newArr[4] + costErr,
            newArr[5] + costErr,
            newArr[6] + costErr,
            newArr[7] + costErr,
            newArr[8] + costErr,
            newArr[9] + costErr,
            newArr[9] - costErr,
            newArr[8] - costErr,
            newArr[7] - costErr,
            newArr[6] - costErr,
            newArr[5] - costErr,
            newArr[4] - costErr,
            newArr[3] - costErr,
            newArr[2] - costErr,
            newArr[1] - costErr,
            newArr[0] - costErr
        ]);
        console.log('y Values Area');
        console.log(yValuesArea);
    }, [areaValue, years, propertySize, grainValue, ureaValue]);

    const theme = useTheme();
    // const { primary } = theme.palette.text;
    const grey200 = theme.palette.grey[200];
    // const primary200 = theme.palette.primary[200];
    // const primaryDark = theme.palette.primary.dark;
    // const secondaryMain = theme.palette.secondary.main;
    // const secondaryLight = theme.palette.secondary.light;
    const grey500 = theme.palette.grey[500];
    const trace1 = {
        x: xValuesArea,
        y: yValuesArea,
        fill: 'tozerox',
        legendgroup: 'group1',
        fillcolor: 'rgba(0,100,80,0.2)',
        line: { color: 'transparent' },
        name: 'Return on Investment',
        showlegend: false,
        type: 'scatter'
    };

    const trace2 = {
        x: xValuesArea,
        y: [5.5, 3, 5.5, 8, 6, 3, 8, 5, 6, 5.5, 4.75, 5, 4, 7, 2, 4, 7, 4.4, 2, 4.5],
        fill: 'tozerox',
        fillcolor: 'rgba(0,176,246,0.2)',
        line: { color: 'transparent' },
        name: 'Premium',
        showlegend: false,
        legendgroup: 'group2',
        type: 'scatter'
    };

    const trace4 = {
        x: xValuesline,
        y: yValuesLine,
        line: { color: 'rgb(0,100,80)' },
        mode: 'lines+markers',
        name: 'Return on Investment',
        legendgroup: 'group1',
        type: 'scatter'
    };

    const trace5 = {
        x: xValuesline,
        y: [5, 2.5, 5, 7.5, 5, 2.5, 7.5, 4.5, 5.5, 5],
        line: { color: 'rgb(0,176,246)' },
        mode: 'lines',
        name: 'Premium',
        legendgroup: 'group2',
        type: 'scatter'
    };
    const space = ' - ';
    const chartLayout = {
        paper_bgcolor: 'rgb(255,255,255)',
        plot_bgcolor: 'rgb(255,255,255)',
        autosize: true,
        groupclick: true,
        showlegend: true,
        // automargin: true,
        legend: { orientation: 'h', xanchor: 'center', x: 0.5, y: 1.2, font: { color: grey500 } },
        margin: { l: 45, r: 10, t: 0, b: 90 },
        xaxis: {
            gridcolor: 'rgb(229,229,229)',
            range: [0, 9],
            showgrid: false,
            showline: true,
            showticklabels: true,
            tickcolor: 'rgb(127,127,127)',
            ticks: 'outside',
            zeroline: true,
            zerolinecolor: '#969696',
            zerolinewidth: 4,
            tickmode: 'array',
            tickfont: { family: 'Arial', size: 14 },
            tickangle: 90,
            tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            ticktext: [
                years[0].name + space + years[0].value,
                years[1].name + space + years[1].value,
                years[2].name + space + years[2].value,
                years[3].name + space + years[3].value,
                years[4].name + space + years[4].value,
                years[5].name + space + years[5].value,
                years[6].name + space + years[6].value,
                years[7].name + space + years[7].value,
                years[8].name + space + years[8].value,
                years[9].name + space + years[9].value
            ]
        },
        yaxis: {
            gridcolor: grey200,
            showgrid: true,
            showline: true,
            showticklabels: true,
            tickcolor: 'rgb(255,255,255)',
            // ticks: 'outside',
            zeroline: true,
            zerolinecolor: '#969696',
            zerolinewidth: 4,
            showtickprefix: 'all',
            tickprefix: '$'
        }
    };
    const { width, height, ref } = useResizeDetector({
        // refreshMode: 'debounce',
        // refreshRate: 1000
    });
    PlotlyChart.propTypes = {
        areaValue: PropTypes.number
    };

    return (
        <div>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="h3">
                                                <NumberFormat
                                                    value={yValuesLine[9]}
                                                    displayType="text"
                                                    thousandSeparator={seperatorOn}
                                                    prefix="$"
                                                />
                                                <Typography varient="subtitle1">Ten Year Return on Investment</Typography>
                                            </Typography>
                                            <Typography variant="subtitle2">
                                                By Spreading additional urea in wet years over <b>{areaValue}Ha</b> at
                                                <b> ${ureaValue} </b>per tonne and assuming a grain price of <b>${grainValue} </b>per tonne.
                                            </Typography>
                                            <Typography variant="subtitle2">
                                                Initial costs for the soil probes and weather stations is
                                                <b>
                                                    <NumberFormat
                                                        value={cost}
                                                        displayType="text"
                                                        thousandSeparator={seperatorOn}
                                                        prefix=" $"
                                                        suffix=" "
                                                        allowNegative={!seperatorOn}
                                                    />
                                                </b>
                                                and the ongoing costs per year for the technology is
                                                <b>
                                                    <NumberFormat
                                                        value={ongoingCost}
                                                        displayType="text"
                                                        thousandSeparator={seperatorOn}
                                                        prefix=" $"
                                                        suffix=" "
                                                        allowNegative={!seperatorOn}
                                                    />
                                                </b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* <Grid item>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div ref={ref} style={{ display: 'flex', height: '100%' }}>
                                <Plot
                                    data={[trace1, trace4]}
                                    useResizeHandler
                                    layout={chartLayout}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </div>
    );
};

PlotlyChart.propTypes = {
    isLoading: PropTypes.bool,
    years: PropTypes.array,
    propertySize: PropTypes.number,
    grainValue: PropTypes.number,
    ureaValue: PropTypes.number
};

export default PlotlyChart;
