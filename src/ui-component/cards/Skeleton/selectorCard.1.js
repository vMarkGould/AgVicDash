import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Typography, Selector, Grid } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

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
        thumb: {
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
// ===========================|| DASHBOARD - Slider ||=========================== //

const SelectorCard = ({ isLoading }) => {
    const classes = useStyles();
    const selectorClass = useSelectorStyles();
    const [selectorValue, setSelectorvalue] = useState('');
    console.log(selectorClass);
    
const updateFieldChanged = index => e => {
  console.log('index: ' + index);
  console.log('property name: '+ e.target.name);
  let newArr = [...datas]; // copying the old datas array
  newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

  setDatas(newArr); // ??
}

    SelectorCard.propTypes = {
        setSlidervalue: PropTypes.func,
        sliderValue: PropTypes.number,
        unit: PropTypes.string,
        label: PropTypes.string,
        step: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number
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
                                        Yearly Seasonal outlook
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            {years.map((data, index) => {
                                <React.Fragment key={data.index}>
                                    <Grid xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                Year1
                                            </InputLabel>
                                            <NativeSelect
                                                onChange={updateFieldChanged(index)}
                                                defaultValue={'avg'}
                                                inputProps={{
                                                name: 'year1',
                                                id: 'uncontrolled-native',
                                            }}
                                            >
                                                <option value={'avg'}>avg</option>
                                                <option value={'wet'}>wet</option>
                                                <option value={'dry'}>dry</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            })}
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

SelectorCard.propTypes = {
    isLoading: PropTypes.bool
};

export default SelectorCard;
