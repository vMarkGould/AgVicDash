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
    const areaName = 'Area Applied To';
    const areaUnit = 'Ha';
    const [grainValue, setGrainValue] = useState(400);
    const grainName = 'Grain Price';
    const grainUnit = '$';
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
                    <Grid item xs={3}>
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
                    <Grid item xs={3}>
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
            <Grid item xs={12}>
                <Grid container>
                    <SelectorCard isLoading={isLoading} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <PlotlyChart isLoading={isLoading} areaValue={areaValue} />
            </Grid>
        </Grid>
    );
};
export default ChartPlotly;
