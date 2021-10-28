import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Collapse } from '@material-ui/core';
import { gridSpacing } from 'store/constant';

// import plotly
// import PlotlyChart from './plotlychart';

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

    return <div>test</div>;
};
export default SoilMoistureRoi;
