import React from 'react';
import { Box, Stepper, Step, StepButton, Typography, Grid } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/styles';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepButton from '@mui/material/StepButton';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import seed from './images/seed.jpg';
import tillering from './images/tillering.jpg';
import stemElongation from './images/stem-elongation.jpg';
import flowering from './images/flowering.jpg';
import sowingData from './soil-decisions/sowing-data';
import tilleringData from './soil-decisions/tillering-data';
import stemElongationData from './soil-decisions/stem-elongation-data';
import floweringData from './soil-decisions/flower-data';
import SwipeableTextMobileStepper from './swipable-view';

const steps = [
    {
        label: 'Sowing',
        image: seed
    },
    {
        label: 'Tillering',
        image: tillering
    },
    {
        label: 'Stem Elongation',
        image: stemElongation
    },
    {
        label: 'Flowering',
        image: flowering
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .Mui-active': {
            color: theme.palette.secondary.main
        }
    },
    secondary: {
        color: theme.palette.secondary.main,
        fontWeight: 500
    }
}));

const swipeData = [sowingData, tilleringData, stemElongationData, floweringData];

export default function HorizontalStepper() {
    const theme = useTheme();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    // const [completed, setCompleted] = React.useState({});
    console.log(classes.secondary);
    console.log(classes);
    console.log(classes.root);

    // const totalSteps = () => steps.length;

    // const completedSteps = () => Object.keys(completed).length;

    // const isLastStep = () => activeStep === totalSteps() - 1;

    // const allStepsCompleted = () => completedSteps() === totalSteps();

    /* const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    }; */

    const handleStep = (step) => () => setActiveStep(step);

    /* const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);



    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    }; */

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep} className={classes.root} alternativeLabel>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <div>
                            <StepButton color={theme.palette.secondary.main} onClick={handleStep(index)}>
                                {step.label}
                                {index === 0 ? (
                                    <img src={step.image} alt={step.label} width="70" align="left" />
                                ) : (
                                    <img src={step.image} alt={step.label} width="40" align="left" />
                                )}
                            </StepButton>
                        </div>
                    </Step>
                ))}
            </Stepper>
            <div>
                <>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext} sx={{ mr: 1 }}>
                            Next
                        </Button>
                    </Box> */}
                    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <Typography sx={{ mt: 2, mb: 1 }} className={classes.secondary}>
                                {steps[activeStep].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <SwipeableTextMobileStepper swipeData={swipeData[activeStep]} />
                        </Grid>
                    </Grid>
                </>
            </div>
        </Box>
    );
}
