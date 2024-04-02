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

  const data_out_of_pocket_payment_test = [
    {
      y: [1, 2, 3, 4, 5], // Sample data points
      type: 'box', // Type of plot
      boxpoints: 'all', // Display all data points as individual points
      jitter: 0.3, // Add jitter to the data points for better visualization
      pointpos: 0, // Adjust position of the data points
      marker: {
        color: 'rgb(7,40,89)', // Color of the box plot
      },
      line: {
        color: 'rgb(7,40,89)', // Color of the lines
      },
    },
  ];

  // CSS style for the plot title
  const titleStyle = {
    textAlign: 'left', // Align the title to the left
    paddingLeft: '60px', // Add padding to the left
    marginBottom: '0',
    fontWeight: 'bold', // Make the title bold
    fontSize: '20px', // Set the font size
  };

  return (
    <div style={{ textAlign: 'right', paddingRight: '200px' }}>
      <div style={{width: '50%', height: '400px', marginLeft: 'auto'}}>
        <div style={titleStyle}>Out-of-pocket payment spread</div>
        <Plot
          data={data_out_of_pocket_payment_test} // Data for the plot
          layout={{ xaxis: { showticklabels: false } ,
        yaxis: {tickprefix: "$"}}} // No need for layout configuration
          style={{ width: '100%', height: '100%' }} // Style to set width and height
        />
      </div>
    </div>
  );
}