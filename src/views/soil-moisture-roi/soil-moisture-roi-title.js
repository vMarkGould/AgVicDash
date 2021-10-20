import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Typography, FormControlLabel, Switch } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        overflow: 'hidden',
        position: 'relative',
        /* '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            bottom: '-85px',
            right: '-95px',
            opacity: 0.9,
            [theme.breakpoints.down('xs')]: {
                top: '-105px',
                right: '-140px'
            }
        }, */
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            bottom: '-125px',
            right: '-95px',
            opacity: 0.5,
            [theme.breakpoints.down('xs')]: {
                top: '-155px',
                right: '-70px'
            }
        }
    },
    content: {
        padding: '20px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[800],
        marginTop: '8px'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary[200],
        zIndex: 1
    },
    cardHeading: {
        color: theme.palette.secondary.dark,
        fontSize: '3rem',
        fontWeight: 800,
        marginRight: '8px',
        marginTop: '14px',
        marginBottom: '6px'
    },
    subHeading: {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.secondary[200]
    },
    avatarCircle: {
        cursor: 'pointer',
        ...theme.typography.smallAvatar,
        backgroundColor: theme.palette.secondary[200],
        color: theme.palette.secondary.dark
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 275deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    }
}));

//= ==========================|| DASHBOARD DEFAULT - EARNING CARD ||===========================//

const SoilMoistureRoiTitle = ({ isLoading, isChecked, setIsChecked }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <MainCard border={false} className={classes.card} contentClass={classes.content}>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container justifyContent="space-between">
                                <Typography component="div" variant="h3" sx={{ color: theme.palette.secondary.dark }}>
                                    Welcome to the soil moisture probe Return on investment calculator
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography component="div" variant="subtitle1" sx={{ width: 1, p: 1, color: theme.palette.grey[500] }}>
                                        This calculator can be used as a guide to look at the possible return on investment for soil probes
                                        in a broadacre cropping farming system, the assumtions for this model are based on the data captured
                                        from a case study from the Victorian On-Farm Internet of things Trial.
                                        <br />
                                        You can adjust the return on investment model to match your farm by adjusting the variables below.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ mb: 1.25 }}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isChecked}
                                        onChange={() => {
                                            setIsChecked((prev) => !prev);
                                        }}
                                    />
                                }
                                label="Show Soil Moisture ROI Variables"
                            />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

SoilMoistureRoiTitle.propTypes = {
    isLoading: PropTypes.bool,
    isChecked: PropTypes.bool
};

export default SoilMoistureRoiTitle;
