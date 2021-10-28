import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/styles';
import { Box, MobileStepper, Paper, Typography, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: 800
    },
    mobileStepper: {
        bgcolor: theme.palette.primary.light
    }
}));

function SwipeableTextMobileStepper({ swipeData }) {
    const theme = useTheme();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = swipeData.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 800 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: 800,
                    height: 25,
                    pl: 2,
                    bgcolor: theme.palette.primary.main,
                    p: 2
                }}
            >
                <Typography color={theme.palette.secondary.light} fontWeight="500">
                    {swipeData[activeStep].label}
                </Typography>
            </Paper>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.mobileStepper}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Drier
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Wetter
                    </Button>
                }
            />
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={10000}
            >
                {swipeData.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                sx={{
                                    height: '100%',
                                    display: 'block',
                                    maxWidth: 800,
                                    width: '100%'
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <Typography>{step.description}</Typography>
                                    {step.link !== '' ? (
                                        <div align="center">
                                            <a href={step.link} target="_blank" rel="noopener noreferrer">
                                                {step.linkLabel}
                                            </a>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </Box>
                                {console.log(step.image !== '' && step.image !== undefined)}
                                {console.log(step.image)}
                                {step.image !== '' && step.image !== undefined ? (
                                    <div>
                                        <Paper
                                            square
                                            elevation={0}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                maxWidth: 800,
                                                height: 25,
                                                pl: 2,
                                                bgcolor: theme.palette.primary.main,
                                                p: 2
                                            }}
                                        >
                                            <Typography color={theme.palette.secondary.light} fontWeight="500">
                                                What to look for in your Soil Pobe data:
                                            </Typography>
                                        </Paper>
                                        <Box container className={classes.image}>
                                            <img src={step.image} alt={step.alt} width="100%" />
                                        </Box>
                                        <Typography>{step.imageDescription}</Typography>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </Box>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    );
}

SwipeableTextMobileStepper.propTypes = {
    swipeData: PropTypes.array
};

export default SwipeableTextMobileStepper;
