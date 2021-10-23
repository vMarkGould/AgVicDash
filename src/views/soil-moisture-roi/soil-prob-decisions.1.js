import * as React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Agriculture from '@material-ui/icons/Agriculture';
import WbSunny from '@material-ui/icons/WbSunny';
import Grain from '@material-ui/icons/Grain';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Typography } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import crop from './crop.svg';
import { makeStyles, useTheme } from '@material-ui/styles';
// import HarvesterIcon from './combine-harvester.svg';
import { ReactComponent as SingleWheat } from './single-wheat.svg';
import seed from './images/seed.jpg';

/* const Wheat = () => {
    const theme = useTheme();
    return SingleWheat;
}; */

const CropIcon = () => {
    const theme = useTheme();
    return (
        <svg height="100" width="100" fill={theme.palette.warning.main} xmlns="http://www.w3.org/2000/svg">
            <path d="M15.248,97.137l-1.357-13.664c0-1.257,1.602-0.144,3.623-0.144l0,0c2.005,0,3.626-1.113,3.626,0.144l0,0l-1.136,13.326  C20.004,99.709,15.248,98.524,15.248,97.137z" />
            <path d="M9.431,52.654c-9.954-4.499-9.144-11.582-9.144-11.582c-1.256,2.5,1.416,24.309,11.79,24.309  C16.719,65.381,20.619,57.679,9.431,52.654z" />
            <path d="M9.431,37.244c-9.954-4.485-9.144-11.568-9.144-11.568c-1.256,2.494,1.416,24.309,11.79,24.309  C16.719,49.985,20.619,42.283,9.431,37.244z" />
            <path d="M9.431,22.297c-9.954-4.466-9.144-11.562-9.144-11.562c-1.256,2.5,1.416,24.296,11.79,24.296  C16.719,35.031,20.619,27.349,9.431,22.297z" />
            <path d="M23.233,65.381c10.374,0,13.033-21.809,11.79-24.309c0,0,0.804,7.083-9.156,11.582  C14.691,57.679,18.578,65.381,23.233,65.381z" />
            <path d="M9.431,68.434c-9.954-4.498-9.144-11.581-9.144-11.581c-1.256,2.5,1.416,24.309,11.79,24.309  C16.719,81.162,20.619,73.46,9.431,68.434z" />
            <path d="M23.233,81.162c10.374,0,13.033-21.809,11.79-24.309c0,0,0.804,7.083-9.156,11.581  C14.691,73.46,18.578,81.162,23.233,81.162z" />
            <path d="M23.233,49.985c10.374,0,13.033-21.815,11.79-24.309c0,0,0.804,7.083-9.156,11.568  C14.691,42.283,18.578,49.985,23.233,49.985z" />
            <path d="M23.233,35.031c10.374,0,13.033-21.796,11.79-24.296c0,0,0.804,7.096-9.156,11.562  C14.691,27.349,18.578,35.031,23.233,35.031z" />
            <path d="M18.376,23.462C29.381,23.462,17.771,0,17.771,0C16.371,2.207,7.374,23.462,18.376,23.462z" />
            <path d="M48.131,98.967l6.641-11.621l0,0c0.527-1.119-1.406-0.813-3.22-1.646l0,0c-1.842-0.854-2.825-2.539-3.35-1.4l-4.527,12.955  C43.092,98.524,46.897,101.597,48.131,98.967z" />
            <path d="M57.134,54.47c-7.118-8.274-3.411-14.355-3.411-14.355c-2.19,1.738-8.948,22.649,0.449,27.017  C58.384,69.092,65.168,63.753,57.134,54.47z" />
            <path d="M63.632,40.486c-7.122-8.255-3.418-14.335-3.418-14.335c-2.194,1.732-8.962,22.636,0.442,27.018  C64.882,55.122,71.652,49.796,63.632,40.486z" />
            <path d="M69.927,26.945c-7.142-8.242-3.418-14.348-3.418-14.348c-2.188,1.738-8.951,22.636,0.456,27.017  C71.177,41.561,77.954,36.242,69.927,26.945z" />
            <path d="M64.296,71.845c9.406,4.355,21.015-14.283,20.923-17.089c0,0-2.246,6.765-13.177,6.641  C59.79,61.267,60.077,69.874,64.296,71.845z" />
            <path d="M50.494,68.78c-7.132-8.269-3.424-14.342-3.424-14.342c-2.188,1.731-8.948,22.636,0.456,26.99  C51.75,83.388,58.515,78.063,50.494,68.78z" />
            <path d="M57.648,86.142c9.4,4.375,21.009-14.283,20.931-17.076c0,0-2.253,6.764-13.177,6.641  C53.144,75.576,53.437,84.189,57.648,86.142z" />
            <path d="M70.793,57.869c9.4,4.368,21.001-14.296,20.923-17.083c0,0-2.252,6.758-13.176,6.641  C66.274,47.296,66.574,55.922,70.793,57.869z" />
            <path d="M77.088,44.301c9.407,4.381,20.995-14.27,20.917-17.069c0,0-2.259,6.783-13.17,6.64  C72.576,33.742,72.876,42.355,77.088,44.301z" />
            <path d="M77.55,31.763c9.974,4.635,9.336-21.536,9.336-21.536C84.686,11.66,67.576,27.127,77.55,31.763z" />
        </svg>
    );
};

const HarvesterIcon = () => {
    const theme = useTheme();
    return (
        <svg viewBox="0 0 297 297" xmlns="http://www.w3.org/2000/svg" fill={theme.palette.primary}>
            <path
                d="M287.116,24.462h-32.616c-2.863,0-5.585,1.241-7.462,3.402L217.472,61.9l-2.145-12.872
    		c-0.794-4.766-4.918-8.259-9.749-8.259h-65.231c-4.832,0-8.955,3.493-9.749,8.259l-4.059,24.357H83.928
    		c-28.294,0-51.312,23.019-51.312,51.312v46.535h-0.247C14.52,171.232,0,185.752,0,203.601v26.438c0,5.458,4.425,9.884,9.884,9.884
    		h260.925c5.458,0,9.884-4.425,9.884-9.884v-26.438c0-17.848-14.52-32.369-32.369-32.369h-32.863v-12.849h6.424
    		c2.905,0,5.664-1.278,7.541-3.495c1.878-2.217,2.686-5.147,2.208-8.013l-9.947-59.685l37.32-42.961h28.109
    		c5.458,0,9.884-4.425,9.884-9.884S292.575,24.462,287.116,24.462z M197.204,60.537l13.014,78.08h-74.513l13.014-78.08H197.204z
    		 M260.925,203.601v16.555H19.767v-16.555c0-6.948,5.653-12.602,12.601-12.602h215.955
    		C255.272,190.999,260.925,196.652,260.925,203.601z M195.694,171.232H52.383v-46.535c0-17.394,14.152-31.54
    		5,31.545-31.545h39.315l-8.954,53.723c-0.478,2.866,0.33,5.796,2.208,8.013c1.877,2.217,4.636,3.495,7.541,3.495h71.656V171.232z"
                fill={theme.palette.primary}
            />
            <path
                d="M270.809,252.771H9.884c-5.458,0-9.884,4.425-9.884,9.884c0,5.458,4.425,9.884,9.884,9.884h260.925
    		c5.458,0,9.884-4.425,9.884-9.884C280.692,257.197,276.267,252.771,270.809,252.771z"
                fill={theme.palette.primary}
            />
        </svg>
    );
};

const useStyles = makeStyles((theme) => ({
    dot: {
        color: theme.palette.primary.light
    },
    content: {
        padding: '0px !important'
    },
    contentContainer: {
        padding: '16px',
        paddingBottom: 0,
        color: '#fff'
    },
    fontStyle: {
        fontWeight: 400
    },
    numbers: {
        fontWeight: 800
    }
}));

export default function CustomizedTimeline() {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                    Summer
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector color="primary" />
                    <TimelineDot color="info">
                        <WbSunny color="warning" fontSize="large" />
                        <img src={seed} alt="Seed" width="40" />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Evaluate the summer rains, and monitor weeds affect on reduction in soil moisture
                    </Typography>
                    <Typography>Add something else</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    Autumn
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <Grain color="warning" fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Based on the residual soil moistue, decide on which crops to sow more of, if there is marge amounts of stored
                        moisture you might decide to sow a Canola crop.
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    Winter
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="warning">
                        <Agriculture color="primary" fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Based on rainfall and is penatration into the soil, its possible to decide if the environment is right to add more
                        fertaliser, to increase yeilds and quality of crop
                    </Typography>
                    <Typography>Because you need rest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <SingleWheat />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
