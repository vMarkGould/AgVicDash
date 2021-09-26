const trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    fill: 'tozerox',
    legendgroup: 'group1',
    fillcolor: 'rgba(0,100,80,0.2)',
    line: { color: 'transparent' },
    name: 'Fair',
    showlegend: false,
    type: 'scatter'
};

const trace2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    y: [5.5, 3, 5.5, 8, 6, 3, 8, 5, 6, 5.5, 4.75, 5, 4, 7, 2, 4, 7, 4.4, 2, 4.5],
    fill: 'tozerox',
    fillcolor: 'rgba(0,176,246,0.2)',
    line: { color: 'transparent' },
    name: 'Premium',
    showlegend: false,
    legendgroup: 'group2',
    type: 'scatter'
};

const trace4 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    line: { color: 'rgb(0,100,80)' },
    mode: 'lines',
    name: 'Fair',
    legendgroup: 'group1',
    type: 'scatter'
};

const trace5 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [5, 2.5, 5, 7.5, 5, 2.5, 7.5, 4.5, 5.5, 5],
    line: { color: 'rgb(0,176,246)' },
    mode: 'lines',
    name: 'Premium',
    legendgroup: 'group2',
    type: 'scatter'
};

const chartData = {[trace1, trace2, trace4, trace5]};

export defualt chartData;