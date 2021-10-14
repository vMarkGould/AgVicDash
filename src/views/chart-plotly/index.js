import React, { useEffect, useState } from 'react';

// material-ui
import { Typography, Grid } from '@material-ui/core';
import { gridSpacing } from 'store/constant';

// import plotly
import PlotlyChart from './plotlychart';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import SliderCard from 'ui-component/cards/Skeleton/sliderCard';
import SelectorCard from 'ui-component/cards/Skeleton/selectorCard';

//= =============================|| SAMPLE PAGE ||==============================//

const ChartPlotly = () => {
    const [isLoading, setLoading] = useState(true);
    const [areaValue, setAreaValue] = useState(1000);
    const areaName = 'Area Applied';
    const areaUnit = 'Ha';
    const [grainValue, setGrainValue] = useState(400);
    const grainName = 'Grain Price';
    const grainUnit = '$';
    const [years, setYears] = useState([
        {
            id: 1,
            name: 'Year1',
            value: 'wet'
        },
        {
            id: 2,
            name: 'Year2',
            value: 'dry'
        },
        {
            id: 3,
            name: 'Year3',
            value: 'avg'
        },
        {
            id: 4,
            name: 'Year4',
            value: 'avg'
        },
        {
            id: 5,
            name: 'Year5',
            value: 'avg'
        },
        {
            id: 6,
            name: 'Year6',
            value: 'avg'
        },
        {
            id: 7,
            name: 'Year7',
            value: 'avg'
        },
        {
            id: 8,
            name: 'Year8',
            value: 'avg'
        },
        {
            id: 9,
            name: 'Year9',
            value: 'avg'
        },
        {
            id: 10,
            name: 'Year10',
            value: 'avg'
        }
    ]);
    const menuOptions = [
        {
            id: 1,
            name: 'wet',
            value: 'wet'
        },
        {
            id: 2,
            name: 'dry',
            value: 'dry'
        },
        {
            id: 3,
            name: 'avg',
            value: 'avg'
        }
    ];
    const selectorTitle = 'Yearly Seasonal Conditions';
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Soil Moisture">
                    <Typography variant="body2">Information about Soil Moisture ROI</Typography>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={5} lg={3} xl={2}>
                        <SliderCard
                            isLoading={isLoading}
                            setSlidervalue={setAreaValue}
                            sliderValue={areaValue}
                            unit={areaUnit}
                            label={areaName}
                            step={100}
                            min={100}
                            max={5000}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={3} xl={2}>
                        <SliderCard
                            isLoading={isLoading}
                            setSlidervalue={setGrainValue}
                            sliderValue={grainValue}
                            unit={grainUnit}
                            label={grainName}
                            step={10}
                            min={50}
                            max={1000}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={11}>
                <SelectorCard
                    isLoading={isLoading}
                    selectorData={years}
                    setSelectorData={setYears}
                    menuOptions={menuOptions}
                    title={selectorTitle}
                />
            </Grid>
            <Grid item xs={12}>
                <PlotlyChart isLoading={isLoading} areaValue={areaValue} years={years} />
            </Grid>
        </Grid>
    );
};
export default ChartPlotly;
