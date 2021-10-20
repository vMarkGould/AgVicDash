import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-basic-dist';
import NumberFormat from 'react-number-format';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useResizeDetector } from 'react-resize-detector';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    FormControlLabel,
    Switch,
    Tooltip,
    Collapse,
    FormControl,
    NativeSelect,
    InputLabel
} from '@material-ui/core';
// MenuItem, TextField,

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Finance } from 'financejs';
import GetNPV from './npv';

const Plot = createPlotlyComponent(Plotly);
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.dark
    },
    content: {
        padding: '0px !important'
    },
    contentContainer: {
        padding: '16px',
        paddingBottom: 0,
        color: '#fff'
    },
    fontStyle: {
        fontWeight: 400
    },
    numbers: {
        fontWeight: 800
    }
}));

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
    const classes = useStyles();
    const xValuesline = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const xValuesArea = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const [yValuesArea, setyValuesArea] = useState([]);
    const [yValuesLine, setyValuesLine] = useState([]);
    const [yNpvValuesArea, setyNpvValuesArea] = useState([]);
    const [yNpvValuesLine, setyNpvValuesLine] = useState([]);
    // const [trace1datax, setTrace1datax] = useState([]);
    // const [i, seti] = useState(0);
    // console.log(years);
    const seperatorOn = true;
    const cost = -Math.round(Math.abs((propertySize / 500) * 7756));
    const costErr = Math.round(7756 * 0.5);
    const ongoingCost = -Math.round(Math.abs((propertySize / 500) * 172));
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
    const [discountRate, setDiscountRate] = useState(6);
    // console.log('total net gain');
    // console.log(totalNetGain);
    // use switch or lookup table function to calculate the Y Values
    useEffect(() => {
        const newArr = [];
        const npvArr = [];
        const netArr = [];
        years.map((year, index) => {
            switch (year.value) {
                case 'wet':
                    if (index === 0) {
                        netArr[index] = 0;
                        newArr[index] = Math.round(cost + totalNetGain);
                        npvArr[index] = Math.round(cost);
                    } else {
                        newArr[index] = Math.round(newArr[index - 1] + ongoingCost + totalNetGain);
                        netArr[index] = Math.round(ongoingCost + totalNetGain);
                        // const netGain = netArr.reduce((prevValue, currValue, index) => prevValue + currValue, 0);
                        const npvGain = GetNPV(discountRate, 0, netArr);
                        npvArr[index] = Math.round(cost + npvGain);
                    }
                    return null;
                case 'dry':
                    if (index === 0) {
                        netArr[index] = 0;
                        newArr[index] = Math.round(cost);
                        npvArr[index] = Math.round(cost);
                    } else {
                        newArr[index] = Math.round(newArr[index - 1] + ongoingCost);
                        netArr[index] = Math.round(ongoingCost);
                        // const netGain = netArr.reduce((prevValue, currValue, index) => prevValue + currValue, 0);
                        // const finance = new Finance();
                        const npvGain = GetNPV(discountRate, 0, netArr);
                        npvArr[index] = Math.round(cost + npvGain);
                    }
                    return null;
                default:
                    if (index === 0) {
                        newArr[index] = Math.round(cost);
                        npvArr[index] = Math.round(cost);
                    } else {
                        newArr[index] = Math.round(newArr[index - 1] + ongoingCost);
                        netArr[index] = Math.round(ongoingCost);
                        // const netGain = netArr.reduce((prevValue, currValue, index) => prevValue + currValue, 0);
                        // const finance = new Finance();
                        const npvGain = GetNPV(discountRate, 0, netArr);
                        npvArr[index] = Math.round(cost + npvGain);
                    }
                    return null;
            }
        });
        console.log(npvArr);
        console.log(netArr);
        console.log(newArr);
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
        setyNpvValuesLine(npvArr);
        setyNpvValuesArea([
            npvArr[0] + costErr,
            npvArr[1] + costErr,
            npvArr[2] + costErr,
            npvArr[3] + costErr,
            npvArr[4] + costErr,
            npvArr[5] + costErr,
            npvArr[6] + costErr,
            npvArr[7] + costErr,
            npvArr[8] + costErr,
            npvArr[9] + costErr,
            npvArr[9] - costErr,
            npvArr[8] - costErr,
            npvArr[7] - costErr,
            npvArr[6] - costErr,
            npvArr[5] - costErr,
            npvArr[4] - costErr,
            npvArr[3] - costErr,
            npvArr[2] - costErr,
            npvArr[1] - costErr,
            npvArr[0] - costErr
        ]);
        console.log('y Values Line');
        console.log(yValuesLine);
        console.log('Y NPV Values');
        console.log(yNpvValuesLine);
        console.log(yNpvValuesArea);
    }, [areaValue, years, propertySize, grainValue, ureaValue, discountRate]);

    const theme = useTheme();
    // const { primary } = theme.palette.text;
    // const grey200 = theme.palette.grey[200];
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
        fillcolor: 'rgba(160,79,0,0.2)',
        line: { color: 'transparent', shape: 'spline', smoothing: 1.3 },
        name: 'Return on Investment',
        showlegend: false,
        type: 'scatter'
    };

    const trace2 = {
        x: xValuesArea,
        y: yNpvValuesArea,
        fill: 'tozerox',
        fillcolor: 'rgb(227,237,235,0.2)',
        line: { color: 'transparent', shape: 'spline', smoothing: 1.3 },
        name: 'Premium',
        showlegend: false,
        legendgroup: 'group2',
        type: 'scatter'
    };

    const trace4 = {
        x: xValuesline,
        y: yValuesLine,
        line: { color: theme.palette.secondary.dark, shape: 'spline', smoothing: 1.3 },
        mode: 'lines+markers',
        name: 'Return on Investment',
        legendgroup: 'group1',
        type: 'scatter',
        showlegend: false
    };

    const trace5 = {
        x: xValuesline,
        y: yNpvValuesLine,
        line: { color: theme.palette.primary.dark, shape: 'spline', smoothing: 1.3 },
        mode: 'lines',
        name: 'Premium',
        legendgroup: 'group2',
        type: 'scatter'
    };
    const space = ' - ';
    const chartLayout = {
        paper_bgcolor: theme.palette.secondary.light,
        plot_bgcolor: theme.palette.secondary.light,
        autosize: true,
        groupclick: true,
        showlegend: true,
        // automargin: true,
        // legend: { orientation: 'h', xanchor: 'center', x: 0.5, y: 1.2, font: { color: grey500 } },
        margin: { l: 48, r: 15, t: 20, b: 100 },
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
            zerolinewidth: 3,
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
            gridcolor: grey500,
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
    const [isNPVChecked, setIsNPVChecked] = useState(false);
    PlotlyChart.propTypes = {
        areaValue: PropTypes.number
    };
    const menuOptions = [
        {
            id: 1,
            name: '1%',
            value: 1
        },
        {
            id: 2,
            name: '2%',
            value: 2
        },
        {
            id: 3,
            name: '3%',
            value: 3
        },
        {
            id: 4,
            name: '4%',
            value: 4
        },
        {
            id: 5,
            name: '5%',
            value: 5
        },
        {
            id: 6,
            name: '6%',
            value: 6
        },
        {
            id: 7,
            name: '7%',
            value: 7
        },
        {
            id: 8,
            name: '8%',
            value: 8
        },
        {
            id: 9,
            name: '9%',
            value: 9
        },
        {
            id: 10,
            name: '10%',
            value: 10
        }
    ];
    const updateFieldChanged = () => (e) => {
        console.log(e.target.value);
        setDiscountRate(e.target.value);
    };

    return (
        <div>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Grid container className={classes.contentContainer}>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h3" sx={{ color: theme.palette.secondary.dark }}>
                                            Ten Year Return on Investment
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" sx={{ color: theme.palette.grey[800] }}>
                                            <NumberFormat
                                                value={yValuesLine[9]}
                                                displayType="text"
                                                thousandSeparator={seperatorOn}
                                                prefix="$"
                                            />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.grey[500] }}>
                                    By Spreading additional urea in wet years over
                                    <b>
                                        <NumberFormat
                                            value={areaValue}
                                            displayType="text"
                                            thousandSeparator={seperatorOn}
                                            prefix=" "
                                            suffix="Ha "
                                            allowNegative={!seperatorOn}
                                        />
                                    </b>
                                    at
                                    <b>
                                        <NumberFormat
                                            value={ureaValue}
                                            displayType="text"
                                            thousandSeparator={seperatorOn}
                                            prefix=" $"
                                            suffix=" "
                                            allowNegative={!seperatorOn}
                                        />
                                    </b>
                                    per tonne and assuming a grain price of
                                    <b>
                                        <NumberFormat
                                            value={grainValue}
                                            displayType="text"
                                            thousandSeparator={seperatorOn}
                                            prefix=" $"
                                            suffix=" "
                                            allowNegative={!seperatorOn}
                                        />
                                    </b>
                                    per tonne.
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.grey[500] }}>
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
                            <Grid item>
                                <Tooltip title="Net Present Value">
                                    <FormControlLabel
                                        sx={{ color: theme.palette.secondary.dark }}
                                        control={
                                            <Switch
                                                checked={isNPVChecked}
                                                onChange={() => {
                                                    setIsNPVChecked((prev) => !prev);
                                                }}
                                            />
                                        }
                                        label="NPV"
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Collapse in={isNPVChecked}>
                                    <Tooltip title="Discount Rate">
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }} className={classes.formControl}>
                                            <InputLabel className={classes.inputLabel}>Discount Rate</InputLabel>
                                            <NativeSelect
                                                label="Discount Rate"
                                                name="Discount Rate"
                                                value={discountRate}
                                                className={classes.selectMenu}
                                                native="true"
                                                onChange={updateFieldChanged()}
                                            >
                                                {menuOptions.map((options, index) => (
                                                    <option key={index} className={classes.menuItem} value={options.value}>
                                                        {options.name}
                                                    </option>
                                                ))}
                                            </NativeSelect>
                                        </FormControl>
                                    </Tooltip>
                                </Collapse>
                            </Grid>
                            <Grid item xs={12}>
                                <div ref={ref} style={{ display: 'flex', height: '100%' }}>
                                    {isNPVChecked ? (
                                        <Plot
                                            data={[trace1, trace2, trace4, trace5]}
                                            useResizeHandler
                                            layout={chartLayout}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    ) : (
                                        <Plot
                                            data={[trace1, trace4]}
                                            useResizeHandler
                                            layout={chartLayout}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
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
