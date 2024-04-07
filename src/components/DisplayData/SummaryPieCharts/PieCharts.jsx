import React from 'react';
// import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Chart as ReactChartJs } from 'react-chartjs-2';
import { testContainer } from '../../../styles/plots.css';
import { procedureTabs } from '../../../data/data';

Chart.register(...registerables);

const PieChart = ({selectedTabIndex, selectedSubTabIndex, selectedSubSubTabIndex}) => {
  // Sample data for the Pie chart
  const data = {
    labels: ['Out-of-pocket payment', 'Insurance payment'],
    datasets: [{
      data: [12, 19],
      backgroundColor: [
        '#0D1B2A',
        '#415A77',
      ]
    }]
  };

  // Configuration options for the Pie chart
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  const plotContainerStyle = {
    width: '60%'
  };

  const titleStyle = {
    textAlign: 'left', // Align the title to the left
    paddingLeft: '10px', // Add padding to the left
    marginBottom: '0',
    fontWeight: 'bold', // Make the title bold
    fontSize: '20px', // Set the font size
  };

  const selectedProcedure = procedureTabs[selectedTabIndex].label
  return (
    <div>
        <div style={titleStyle}>{selectedProcedure} average payment breakdown</div>
            <div className='testContainer'>
            <div style={plotContainerStyle}>
                <ReactChartJs type="pie" data={data} />
            </div>
        </div>
    </div>
  );
};

export default PieChart;