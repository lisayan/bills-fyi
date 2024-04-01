import React, { useState } from 'react';
import HomePageTabs from './HomePageTabs/Tabs.jsx';
import BoxPlotComponent from './SummaryBoxPlot/BoxPlotSummaries.jsx';
import { dataObject } from '../../data/data.jsx';

export default function DisplayData() {
  // State to hold selected tabs
  // NEED TO FIX THIS TO NOT BE HARDCODED
  // const defaultTabs = {
  //   "procedure": procedureTabs[0].label,
  //   "insurance": insuranceTabs[0].label,
  //   "provider": providerTabs[0].label
  // }
  // const [selectedTabs, setSelectedTabs] = useState(defaultTabs);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [selectedSubSubTabIndex, setSelectedSubSubTabIndex] = useState(0);

  // Function to update selected tabs state
  const handleTabChange = (index, tab = "") => {
    console.log(index)
    console.log(tab)
    if (tab==="procedure") {
      setSelectedTabIndex(index);
    } else if (tab=="insurance")  {
      setSelectedSubTabIndex(index)
    }
    else if (tab=="provider") {
      setSelectedSubSubTabIndex(index);
    }
  };
  
  return (
    <div>
      {/* Pass selectedTabs and handleTabSelect as props to Tabs component */}
      <HomePageTabs selectedTabIndex={selectedTabIndex}
        selectedSubTabIndex={selectedSubTabIndex}
        selectedSubSubTabIndex={selectedSubSubTabIndex}
        onTabChange={handleTabChange}/>
      {/* Pass selectedTabs to ScatterPlotComponent */}
      <BoxPlotComponent
        selectedTabIndex={selectedTabIndex}
        selectedSubTabIndex={selectedSubTabIndex}
        selectedSubSubTabIndex={selectedSubSubTabIndex}
        data={dataObject}/>
    </div>
  );
}