import { Box } from '@chakra-ui/react';
import React from 'react';
import Plot from 'react-plotly.js';
import { insuranceTabs, procedureTabs, providerTabs } from '../../../data/data.jsx';

export default function BoxPlotComponent({ data, layout, selectedTabIndex, selectedSubTabIndex, selectedSubSubTabIndex }) {
  const jsonString = JSON.stringify({
    "procedure": selectedTabIndex,
    "insurance": selectedSubTabIndex,
    "provider": selectedSubSubTabIndex,
  })

  const data_test = [
    {
      y: [1, 2, 3, 4, 5], // Sample data points
      type: 'box', // Type of plot
      boxpoints: 'all', // Display all data points as individual points
      jitter: 0.3, // Add jitter to the data points for better visualization
      pointpos: -1.8, // Adjust position of the data points
      marker: {
        color: 'rgb(7,40,89)', // Color of the box plot
      },
      line: {
        color: 'rgb(7,40,89)', // Color of the lines
      },
    },
  ];

  // Layout configuration for the plot
  const layout_test = {
    title: 'Box Plot Example', // Title of the plot
    yaxis: {
      title: 'Value', // Label for the y-axis
    },
  };
  // const jsonString = JSON.stringify(selectedTabs)

  // const displayedData = []
  // for (let i = 0; i < data.length; i++) {

  // }

  return (
    <div style={{ textAlign: 'right', paddingRight: '100px' }}>
      <h1>Amount you pay</h1>
      <p style={{ textAlign: 'right' }}>Selected Tabs: {jsonString}</p>
      <Plot
        data={data_test} // Data for the plot
        layout={layout_test} // Layout configuration
        style={{ width: '100%', height: '400px' }} // Style to set width and height
      />
    </div>
  );
}