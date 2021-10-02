import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, Slider, Grid } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

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
    slider: {
        thumb: {
            background: '#fff'
        }
    },
    content: {
        padding: '16px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.primary[200],
        color: '#fff'
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

const useSliderStyles = makeStyles((theme) => ({
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
// ===========================|| DASHBOARD - Slider ||=========================== //

const SliderCard = ({ isLoading, setSlidervalue, sliderValue, unit, label, step, min, max }) => {
    const classes = useStyles();
    const sliderClass = useSliderStyles();
    // const [slidervalue, setsliderValue] = useState(1000);
    console.log(sliderClass);
    const onChange = (e, value) => {
        setSlidervalue(value);
    };

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <MainCard border={false} className={classes.card} contentClass={classes.content}>
                    <Grid container>
                        <Grid xs={12}>
                            <Grid container>
                                <Grid xs={6}>
                                    <Typography variant="subtitle1" align="left" className={classes.secondary}>
                                        {unit} {sliderValue}
                                    </Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography variant="subtitle1" className={classes.secondary}>
                                        {label}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12}>
                            <Slider
                                color="secondary"
                                aria-label={label}
                                value={sliderValue}
                                getAriaValueText={valuetext}
                                step={step}
                                marks
                                min={min}
                                max={max}
                                valueLabelDisplay="auto"
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

SliderCard.propTypes = {
    isLoading: PropTypes.bool
};

export default SliderCard;
