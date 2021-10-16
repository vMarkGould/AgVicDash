/*
Selector component to creat styleised Selectors on a card
Arguments as follows:

title: string
slectorData: array of objects:
[{id:id,label:name,value:value}]
A drop down selector will be added for each object.

It also takes in an Array of objects as menuOptions:
[{id:id,label:name,value:value}]
It will create a menu option for each object in the array
*/
import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, FormControl, InputLabel, NativeSelect } from '@material-ui/core';

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
        '& .MuiNativeSelect-select': {
            color: theme.palette.secondary.light
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
    menuItem: {
        color: theme.palette.secondary.main
    }
}));

/*
    function valuetext(value) {
    return `${value}`;
}
*/

// ===========================|| Selector ||=========================== //
const SelectorCard = ({ isLoading, selectorData, setSelectorData, menuOptions, title }) => {
    const classes = useStyles();
    // const [selectorValue, setSelectorvalue] = useState('');
    // console.log(selectorClass);
    const updateFieldChanged = (index) => (e) => {
        const newArr = [...selectorData]; // copying the old datas array
        newArr[index].value = e.target.value; // replace e.target.value with whatever you want to change it to
        setSelectorData(newArr); // ??
    };

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <Grid container spacing={gridSpacing}>
                    <Grid item>
                        <MainCard border={false} className={classes.card} contentClass={classes.content}>
                            <Grid container>
                                <Grid item>
                                    <Grid container>
                                        <Grid item>
                                            <Typography variant="subtitle1" align="left" className={classes.secondary}>
                                                {title}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item>
                                            {selectorData.map((data, index) => (
                                                <FormControl
                                                    variant="standard"
                                                    sx={{ m: 1, minWidth: 60 }}
                                                    key={index}
                                                    className={classes.formControl}
                                                >
                                                    <InputLabel id={data.id} className={classes.inputLabel}>
                                                        {data.name}
                                                    </InputLabel>
                                                    <NativeSelect
                                                        label={data.name}
                                                        name={data.name}
                                                        value={data.value}
                                                        key={index}
                                                        className={classes.selectMenu}
                                                        native="true"
                                                        onChange={updateFieldChanged(index)}
                                                    >
                                                        {menuOptions.map((options, index) => (
                                                            <option key={index} className={classes.menuItem} value={options.name}>
                                                                {options.value}
                                                            </option>
                                                        ))}
                                                    </NativeSelect>
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
    isLoading: PropTypes.bool,
    selectorData: PropTypes.array,
    setSelectorData: PropTypes.func,
    menuOptions: PropTypes.array,
    title: PropTypes.string
};

export default SelectorCard;
