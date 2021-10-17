import React, { useState } from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useResizeDetector } from 'react-resize-detector';
import { Grid, MenuItem, TextField, Typography, useTheme } from '@material-ui/core';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import PropTypes from 'prop-types';
import { gridSpacing } from 'store/constant';

const Plot = createPlotlyComponent(Plotly);

const status = [
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
];

// eslint-disable-next-line react/prefer-stateless-function
const PlotlyChart = ({ isLoading, sliderValue }) => {
    const [value, setValue] = React.useState('Ten');
    // const [trace1datax, setTrace1datax] = useState([]);
    // const [i, seti] = useState(0);
    const theme = useTheme();
    // const { primary } = theme.palette.text;
    const grey200 = theme.palette.grey[200];
    // const primary200 = theme.palette.primary[200];
    // const primaryDark = theme.palette.primary.dark;
    // const secondaryMain = theme.palette.secondary.main;
    // const secondaryLight = theme.palette.secondary.light;
    const grey500 = theme.palette.grey[500];
    const trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        fill: 'tozerox',
        legendgroup: 'group1',
        fillcolor: 'rgba(0,100,80,0.2)',
        line: { color: 'transparent' },
        name: 'Fair',
        showlegend: false,
        type: 'scatter'
    };

    const trace2 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
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
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        line: { color: 'rgb(0,100,80)' },
        mode: 'lines',
        name: 'Fair',
        legendgroup: 'group1',
        type: 'scatter'
    };

    const trace5 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [5, 2.5, 5, 7.5, 5, 2.5, 7.5, 4.5, 5.5, 5],
        line: { color: 'rgb(0,176,246)' },
        mode: 'lines',
        name: 'Premium',
        legendgroup: 'group2',
        type: 'scatter'
    };
    const chartLayout = {
        paper_bgcolor: 'rgb(255,255,255)',
        plot_bgcolor: 'rgb(255,255,255)',
        autosize: true,
        groupclick: true,
        showlegend: true,
        legend: { orientation: 'h', font: { color: grey500 } },
        margin: { l: 30, r: 10, t: 50 },
        xaxis: {
            gridcolor: 'rgb(229,229,229)',
            range: [1, 10],
            showgrid: false,
            showline: true,
            showticklabels: true,
            tickcolor: 'rgb(127,127,127)',
            ticks: 'outside',
            zeroline: false
        },
        yaxis: {
            gridcolor: grey200,
            showgrid: true,
            showline: false,
            showticklabels: true,
            tickcolor: 'rgb(255,255,255)',
            ticks: 'outside',
            zeroline: false
        }
    };
    const { width, height, ref } = useResizeDetector({
        // refreshMode: 'debounce',
        // refreshRate: 1000
    });

    return (
        <div>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                {value} Year Return on Investment - property size: {sliderValue}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h3">$2,324.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
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
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div ref={ref} style={{ display: 'flex', height: '100%' }}>
                                <Plot
                                    data={[trace1, trace2, trace4, trace5]}
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
    isLoading: PropTypes.bool
};

export default PlotlyChart;
