import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/styles';
import { Box, MobileStepper, Paper, Typography, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.light
    }
}));

function SwipeableTextMobileStepper({ swipeData }) {
    const theme = useTheme();
    console.log(theme.palette.primary.main);
    const classes = useStyles();
    console.log(classes);
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
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 25,
                    pl: 2,
                    bgcolor: theme.palette.primary.main
                }}
            >
                <Typography color={theme.palette.secondary.light}>{swipeData[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={6000}
            >
                {swipeData.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                sx={{
                                    height: 100,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                    p: 2
                                }}
                            >
                                {step.description}
                            </Box>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
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
        </Box>
    );
}

SwipeableTextMobileStepper.propTypes = {
    swipeData: PropTypes.array
};

export default SwipeableTextMobileStepper;
