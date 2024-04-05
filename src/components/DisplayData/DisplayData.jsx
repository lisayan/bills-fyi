import React, { useState, useEffect } from 'react';
import { insuranceTabs, procedureTabs, providerTabs } from '../../data/data.jsx';
import BasicTable from './DataTable/ParentDataTable.jsx';
import HomePageTabs from './HomePageTabs/Tabs.jsx';
import BoxPlotComponent from './SummaryBoxPlots/Boxplots.jsx';
import { dataObject } from '../../data/data.jsx';
import PieChart from './SummaryPieCharts/PieCharts.jsx';
import { boxContainer, parentContainer } from '../../styles/plots.css';
import { fetchData } from './AWS_DDB.jsx';

export default function DisplayData() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [selectedSubSubTabIndex, setSelectedSubSubTabIndex] = useState(0);
  const [dataTable, setDataTable] = useState([]);

  const handleTabChange = (index, tab = "") => {
    if (tab === "procedure") {
      setSelectedTabIndex(index);
    } else if (tab === "insurance") {
      setSelectedSubTabIndex(index);
    } else if (tab === "provider") {
      setSelectedSubSubTabIndex(index);
    }
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const rawData = await fetchData('bills-exposed-database');
        const formattedData = rawData
          .filter(item => 
            item.procedure === procedureTabs[selectedTabIndex].label && 
            item.insurance === insuranceTabs[selectedSubTabIndex].label && 
            item.provider === providerTabs[selectedSubSubTabIndex].label
          )
          .map(item => ({
            procedure: item.procedure,
            insurance: item.insurance,
            oop_payment: item.amountPaidYou,
            insurance_payment: item.amountPaidInsurance,
            provider: item.provider,
          }));
        setDataTable(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAsync();
  }, [selectedTabIndex, selectedSubTabIndex, selectedSubSubTabIndex]);

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
    {
      Header: 'Provider',
      accessor: 'provider',
    },
  ];

  return (
    <div>
      <HomePageTabs
        selectedTabIndex={selectedTabIndex}
        selectedSubTabIndex={selectedSubTabIndex}
        selectedSubSubTabIndex={selectedSubSubTabIndex}
        onTabChange={handleTabChange}
      />
      <div className='parentContainer'>
        <div>
          <div className='boxContainer'>
            <BasicTable columns={columns} data={dataTable} />
          </div>
        </div>
        <div>
          <div className='boxContainer'>
            <BoxPlotComponent
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={dataObject}
            />
            <PieChart
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={dataObject}
            />
          </div>
        </div>
      </div>
    </div>
  );
}