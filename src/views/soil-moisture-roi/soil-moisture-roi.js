import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Collapse } from '@material-ui/core';
import { gridSpacing } from 'store/constant';

// import plotly
import PlotlyChart from './plotlychart';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import SliderCard from 'ui-component/cards/Skeleton/sliderCard';
import SelectorCard from 'ui-component/cards/Skeleton/selectorCard';
import SoilMoistureRoiTitle from './soil-moisture-roi-title';

//= =============================|| SAMPLE PAGE ||==============================//

const SoilMoistureRoi = () => {
    const [isLoading, setLoading] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [areaValue, setAreaValue] = useState(600);
    const [propertySize, setPropertySize] = useState(1500);
    const [grainValue, setGrainValue] = useState(260);
    const [ureaValue, setUreaValue] = useState(400);
    const [years, setYears] = useState([
        {
            id: 1,
            name: 'Year1',
            value: 'avg'
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
            value: 'wet'
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
                <SoilMoistureRoiTitle isChecked={isChecked} setIsChecked={setIsChecked} />
            </Grid>
            <Grid item xs={12}>
                <Collapse in={isChecked}>
                    <MainCard sx={{ width: 1, padding: 0 }}>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} sm={6} md={5} lg={3} xl={2}>
                                    <SliderCard
                                        isLoading={isLoading}
                                        setSlidervalue={setPropertySize}
                                        sliderValue={propertySize}
                                        unit="Ha"
                                        label="Property Size"
                                        step={100}
                                        min={areaValue}
                                        max={5000}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={5} lg={3} xl={2}>
                                    <SliderCard
                                        isLoading={isLoading}
                                        setSlidervalue={setAreaValue}
                                        sliderValue={areaValue}
                                        unit="Ha"
                                        label="Area to apply added Urea"
                                        step={100}
                                        min={500}
                                        max={propertySize}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={5} lg={3} xl={2}>
                                    <SliderCard
                                        isLoading={isLoading}
                                        setSlidervalue={setGrainValue}
                                        sliderValue={grainValue}
                                        unit="$"
                                        label="Grain Price"
                                        step={10}
                                        min={50}
                                        max={600}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={5} lg={3} xl={2}>
                                    <SliderCard
                                        isLoading={isLoading}
                                        setSlidervalue={setUreaValue}
                                        sliderValue={ureaValue}
                                        unit="$"
                                        label="Urea Price"
                                        step={10}
                                        min={100}
                                        max={800}
                                    />
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
                            </Grid>
                        </Grid>
                    </MainCard>
                </Collapse>
            </Grid>
            <Grid item xs={12}>
                <PlotlyChart
                    isLoading={isLoading}
                    areaValue={areaValue}
                    years={years}
                    propertySize={propertySize}
                    grainValue={grainValue}
                    ureaValue={ureaValue}
                />
            </Grid>
        </Grid>
    );
};
export default SoilMoistureRoi;
