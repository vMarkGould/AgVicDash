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
    },
    formControl: {
        color: theme.palette.secondary.main
    },
    selectMenu: {
        color: theme.palette.secondary.main,
        '&:before': {
            borderColor: theme.palette.secondary.main
        },
        '&:after': {
            borderColor: theme.palette.secondary.main
        },
        '& .MuiSelect-select': {
            color: theme.palette.secondary.main
        },
        '& .MuiSvgIcon-root': {
            color: theme.palette.secondary.main
        }
    },
    inputLabel: {
        color: theme.palette.primary.light,
        '&.Mui-focused': {
            color: theme.palette.secondary[200]
        }
    },
    MuiInputLabel: {
        root: {
            '&$shrink': {
                color: '#000',
                '&$focused': {
                    color: theme.palette.secondary.light
                }
            }
        }
    },
    menuItem: {
        color: theme.palette.secondary.main
    }
}));

const useSelectorStyles = makeStyles((theme) => ({
    formControl: {
        color: theme.palette.secondary.main
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
        },
        {
            id: 3,
            name: 'Year3',
            sesonalCondition: 'avg'
        },
        {
            id: 4,
            name: 'Year4',
            sesonalCondition: 'avg'
        },
        {
            id: 5,
            name: 'Year5',
            sesonalCondition: 'avg'
        },
        {
            id: 6,
            name: 'Year6',
            sesonalCondition: 'avg'
        },
        {
            id: 7,
            name: 'Year7',
            sesonalCondition: 'avg'
        },
        {
            id: 8,
            name: 'Year8',
            sesonalCondition: 'avg'
        },
        {
            id: 9,
            name: 'Year9',
            sesonalCondition: 'avg'
        },
        {
            id: 10,
            name: 'Year10',
            sesonalCondition: 'avg'
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
                                        <Grid item>
                                            {years.map((data, index) => (
                                                <FormControl
                                                    variant="standard"
                                                    sx={{ m: 1, minWidth: 120 }}
                                                    key={data.id}
                                                    className={classes.formControl}
                                                >
                                                    <InputLabel id={data.id} className={classes.inputLabel}>
                                                        {data.name}
                                                    </InputLabel>
                                                    {console.log(data.sesonalCondition)}
                                                    <Select
                                                        label={data.name}
                                                        value={data.sesonalCondition}
                                                        key={data.id}
                                                        className={classes.selectMenu}
                                                    >
                                                        <MenuItem className={classes.menuItem} value="wet">
                                                            wet
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} value="dry">
                                                            dry
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} value="avg">
                                                            avg
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            ))}
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
