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
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <MainCard title="Plotly chart">
                            <Typography variant="body2">Test</Typography>
                        </MainCard>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <PlotlyChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ChartPlotly;
