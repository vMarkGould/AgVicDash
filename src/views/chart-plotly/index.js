import React, { useEffect, useState } from 'react';

// material-ui
import { Typography, Grid } from '@material-ui/core';
import { gridSpacing } from 'store/constant';

// import plotly
import PlotlyChart from './plotlychart';

// project imports
import MainCard from 'ui-component/cards/MainCard';

//= =============================|| SAMPLE PAGE ||==============================//

const ChartPlotly = () => {
    const [isLoading, setLoading] = useState(true);
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
                <PlotlyChart isLoading={isLoading} />
            </Grid>
        </Grid>
    );
};
export default ChartPlotly;
