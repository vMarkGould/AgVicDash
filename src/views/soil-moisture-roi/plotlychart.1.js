import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useResizeDetector } from 'react-resize-detector'

const Plot = createPlotlyComponent(Plotly);

// eslint-disable-next-line react/prefer-stateless-function
class PlotlyChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trace1: {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                fill: 'tozerox',
                fillcolor: 'rgba(0,100,80,0.2)',
                line: { color: 'transparent' },
                name: 'Fair',
                showlegend: false,
                type: 'scatter'
            }
        };
    };



    render() {
        
        const { width, height, ref } = useResizeDetector({ 
        // refreshMode: 'debounce', 
        // refreshRate: 1000
        })
        const trace1 = this.state;
        return (
            <div ref={ref} style={{ display: 'flex', height: '100%'}}>
                    <Plot
                        data={[{ trace1 }]}
                        useResizeHandler
                        layout={{
                            paper_bgcolor: 'rgb(255,255,255)',
                            plot_bgcolor: 'rgb(229,229,229)',
                            xaxis: {
                                gridcolor: 'rgb(255,255,255)',
                                range: [1, 10],
                                showgrid: true,
                                showline: false,
                                showticklabels: true,
                                tickcolor: 'rgb(127,127,127)',
                                ticks: 'outside',
                                zeroline: false
                            },
                            yaxis: {
                                gridcolor: 'rgb(255,255,255)',
                                showgrid: true,
                                showline: true,
                                showticklabels: true,
                                tickcolor: 'rgb(127,127,127)',
                                ticks: 'outside',
                                autosize: true,
                                zeroline: false
                            }
                        }}
                        style={{ width: '100%', height: '100%' }}
                    />
            </div>
        );
    }
}

export default PlotlyChart;
