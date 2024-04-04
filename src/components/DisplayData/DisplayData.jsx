import React, { useState } from 'react';
import BasicTable from './DataTable/ParentDataTable.jsx';
import HomePageTabs from './HomePageTabs/Tabs.jsx';
import BoxPlotComponent from './SummaryBoxPlots/Boxplots.jsx';
import { dataObject } from '../../data/data.jsx';
import PieChart from './SummaryPieCharts/PieCharts.jsx';
import { boxContainer, parentContainer } from '../../styles/plots.css';

export default function DisplayData() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [selectedSubSubTabIndex, setSelectedSubSubTabIndex] = useState(0);

  const handleTabChange = (index, tab = "") => {
    console.log(index)
    console.log(tab)
    if (tab==="procedure") {
      setSelectedTabIndex(index);
    } else if (tab==="insurance")  {
      setSelectedSubTabIndex(index)
    }
    else if (tab==="provider") {
      setSelectedSubSubTabIndex(index);
    }
  };

  const columns = [
    {
      Header: 'Procedure',
      accessor: 'procedure',
    },
    {
      Header: 'Insurance',
      accessor: 'insurance',
    },
    {
      Header: 'Out-of-pocket payment',
      accessor: 'oop_payment',
    },
    {
      Header: 'Insurance payment',
      accessor: 'insurance_payment',
    },
  ];

  const data_table = [
    { procedure: 'MRI', insurance: 'Aetna', oop_payment: 200, insurance_payment: 400 },
    { procedure: 'MRI', insurance: 'Aetna', oop_payment: 100, insurance_payment: 8900 },
    { procedure: 'MRI', insurance: 'Aetna', oop_payment: 400, insurance_payment: 999 },
  ];
  
  return (
    <div>
      <HomePageTabs selectedTabIndex={selectedTabIndex}
          selectedSubTabIndex={selectedSubTabIndex}
          selectedSubSubTabIndex={selectedSubSubTabIndex}
          onTabChange={handleTabChange}/>
      <div className='parentContainer'>
        <div>
          <div className='boxContainer'>
              <BasicTable columns={columns} data={data_table} />
          </div>
        </div>
        <div>
          {/* Pass selectedTabs and handleTabSelect as props to Tabs component */}
          {/* Pass selectedTabs to ScatterPlotComponent */}
          <div className='boxContainer'>
            <BoxPlotComponent
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={dataObject}/>
            <PieChart
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={dataObject}/>
          </div>
        </div>
      </div>
    </div>
  );
}