import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Typography, Selector, Grid, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import { gridSpacing } from 'store/constant';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.primary[200],
        // color: theme.palette.primary.light,
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            // background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
            borderRadius: '50%',
            top: '-30px',
            right: '-180px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            // background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
            borderRadius: '50%',
            top: '-160px',
            right: '-130px'
        }
    },
    selector: {
        primary: {
            main: '#fff',
            background: '#fff'
        }
    },
    content: {
        padding: '16px !important'
    },
    primary: {
        color: '#fff'
    },
    secondary: {
        color: theme.palette.primary.light,
        marginTop: '5px'
    },
    padding: {
        paddingTop: 0,
        paddingBottom: 0
    }
}));

const useSelectorStyles = makeStyles((theme) => ({
    thumb: {
        backgroundColor: theme.palette.secondary.main
    },
    active: {
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.light
    },
    track: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main
    },
    rail: {
        color: theme.palette.secondary.main,
        background: theme.palette.secondary.main
    }
}));
function valuetext(value) {
    return `${value}`;
}
// ===========================|| DASHBOARD - Selector ||=========================== //
const SelectorCard = ({ isLoading }) => {
    const classes = useStyles();
    const selectorClass = useSelectorStyles();
    const [selectorValue, setSelectorvalue] = useState('');
    // console.log(selectorClass);
    const [years, setYears] = useState([
        {
            id: 1,
            name: 'Year1',
            sesonalCondition: 'wet'
        },
        {
            id: 2,
            name: 'Year2',
            sesonalCondition: 'dry'
        }
    ]);

    const updateFieldChanged = (index) => (e) => {
        // console.log('index: ' + index);
        // console.log('property name: '+ e.target.name);
        const newArr = [...years]; // copying the old datas array
        newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to
        setYears(newArr); // ??
    };
    /*
    SelectorCard.propTypes = {
        setSlidervalue: PropTypes.func,
        sliderValue: PropTypes.number,
        unit: PropTypes.string,
        label: PropTypes.string,
        step: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number
    };
    */
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard border={false} className={classes.card} contentClass={classes.content}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" align="left" className={classes.secondary}>
                                                Yearly Seasonal outlook
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography className={classes.secondary}>Test</Typography>
                                        </Grid>
                                        <Grid container>
                                            <Grid item>
                                                <table className={classes.secondary}>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>name</th>
                                                            <th>conditions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {years.map((data, index) => (
                                                            <tr key={index}>
                                                                <td key={1}>{data.id}</td>
                                                                <td key={2}>{data.name}</td>
                                                                <td key={3}>{data.sesonalCondition}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

SelectorCard.propTypes = {
    isLoading: PropTypes.bool
};

export default SelectorCard;
