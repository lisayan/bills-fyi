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
  // const jsonString = JSON.stringify(selectedTabs)

  // const displayedData = []
  // for (let i = 0; i < data.length; i++) {

  // }

  const data_test = {
    minValue: 10,
    q1Value: 20,
    medianValue: 30,
    q3Value: 40,
    maxValue: 50
  };
  const { minValue, q1Value, medianValue, q3Value, maxValue } = data_test;
  return (
    <div style={{ textAlign: 'right', paddingRight: '100px' }}>
      <h1>Amount you pay</h1>
      <p style={{ textAlign: 'right' }}>Selected Tabs: {jsonString}</p>
      <Box
      display="inline-block"
      position="relative"
      height="400px"
      width="40px"
      backgroundColor="gray.200"
      margin="0 10px"
    >
      {/* Box */}
      <Box
        position="absolute"
        top={`${(1 - (q3Value - minValue) / (maxValue - minValue)) * 100}%`}
        height={`${((q3Value - q1Value) / (maxValue - minValue)) * 100}%`}
        width="100%"
        backgroundColor="blue.500"
      />

      {/* Median */}
      <Box
        position="absolute"
        top={`${(1 - (medianValue - minValue) / (maxValue - minValue)) * 100}%`}
        height="2px"
        width="100%"
        backgroundColor="red.500"
      />

      {/* Lower Quartile */}
      <Box
        position="absolute"
        top={`${(1 - (q1Value - minValue) / (maxValue - minValue)) * 100}%`}
        height="2px"
        width="100%"
        backgroundColor="green.500"
      />

      {/* Upper Quartile */}
      <Box
        position="absolute"
        top={`${(1 - (q3Value - minValue) / (maxValue - minValue)) * 100}%`}
        height="2px"
        width="100%"
        backgroundColor="green.500"
      />

      {/* Min Value */}
      <Box
        position="absolute"
        bottom="0"
        height="2px"
        width="100%"
        backgroundColor="black"
      />

      {/* Max Value */}
      <Box
        position="absolute"
        top="0"
        height="2px"
        width="100%"
        backgroundColor="black"
      />
    </Box>
    </div>
  );
}