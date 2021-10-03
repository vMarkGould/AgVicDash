import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import aglogo from './AgVicLogo.svg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from './../../assets/images/logo-dark.svg';
 * import logo from './../../assets/images/logo.svg';
 *
 */

// ===========================|| LOGO SVG ||=========================== //

const Logo = () => {
    const theme = useTheme();
    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <img src={aglogo} alt="Agriculture Victoria" width="180" />
    );
};

export default Logo;
