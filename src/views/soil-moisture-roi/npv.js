import React from 'react';
import PropTypes from 'prop-types';
/** * Calculates the Net Present Value of a given initial investment * cost and an array of cash flow values with the specified discount rate. * * @param{number}rate - 
The discount rate percentage * @param{number}initialCost - The initial investment * @param{array}cashFlows - An array of future payment amounts * 
@return{number}The calculated Net Present Value */

const cashFlows = [];
const rate = 0;
const initialCost = 0;

function GetNPV(rate, initialCost, cashFlows) {
    // prettier-ignore
    return cashFlows.reduce(
        (accumulator, currentValue, index) => accumulator + currentValue / ( (rate / 100 + 1) ** (index + 1) ),
        initialCost
    );
}

export default GetNPV;
