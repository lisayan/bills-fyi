import React from 'react';
import Pie from 'react-chartjs-2';
import Plot from 'react-plotly.js';
import { insuranceTabs, procedureTabs, providerTabs } from '../../../data/data.jsx';
import { boxplotsContainer } from '../../../styles/plots.css';

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

  const layout_box_plot = {
    xaxis: { showticklabels: false } ,
    yaxis: {tickprefix: "$"},
    margin: {
      l: 50, // Left margin
      r: 50, // Right margin
      b: 50, // Bottom margin
      t: 25, // Top margin
      pad: 0 // Padding around the plot area
    },
  }

  const titleStyle = {
    textAlign: 'left', // Align the title to the left
    paddingLeft: '60px', // Add padding to the left
    marginBottom: '0',
    fontWeight: 'bold', // Make the title bold
    fontSize: '20px', // Set the font size
  };

  const selectedProcedure = procedureTabs[selectedTabIndex].label
  return (
    <div>
      <div>
        <div style={titleStyle}>{selectedProcedure} out-of-pocket payment spread</div>
        <div>
          <Plot
            data={data_out_of_pocket_payment_test} // Data for the plot
            layout={layout_box_plot} // No need for layout configuration
            // style={{ width: '100%', height: '100%' }} // Style to set width and height
          />
        </div>
        <div style={titleStyle}>{selectedProcedure} insurance payment spread</div>
        <div>
          <Plot
            data={data_out_of_pocket_payment_test} // Data for the plot
            layout={layout_box_plot} // No need for layout configuration
            // style={{ width: '100%', height: '100%' }} // Style to set width and height
          />
        </div>
        {/* <p style={{ textAlign: 'right' }}>Selected Tabs: {jsonString}</p> */}
      </div>
    </div>
  );
}