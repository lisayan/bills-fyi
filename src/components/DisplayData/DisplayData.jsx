import React, { useState, useEffect } from 'react';
import { insuranceTabs, procedureTabs, providerTabs } from '../../data/data.jsx';
import BasicTable from './DataTable/ParentDataTable.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import HomePageTabs from './HomePageTabs/Tabs.jsx';
import BoxPlotComponent from './SummaryBoxPlots/Boxplots.jsx';
import { dataObject } from '../../data/data.jsx';
import PieChart from './SummaryPieCharts/PieCharts.jsx';
import {bulletContainer, bulletParentContainer, imageContainer, mriImageContainer, mriImageContainer2, priceBoxContainer, priceBoxContainerLeftCenterColumn, priceBoxContainerRightCenterColumn, priceBoxContainerLeftColumn, priceBoxContainerRightColumn, textParentContainer, textTitleContainer} from '../../styles/procedureSummary.css';
import { boxContainer, parentContainer } from '../../styles/plots.css';
import { fetchData } from './AWS_DDB.jsx';
import mriImage from '../../images/MRI.jpg'
import mriImage2 from '../../images/MRI_2.jpg'

export default function DisplayData({procedureIndex}) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(procedureIndex);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [selectedSubSubTabIndex, setSelectedSubSubTabIndex] = useState(0);
  const [procedureDataTable, setProcedureDataTable] = useState([]);
  const [combinedDataTable, setCombinedDataTable] = useState([]);

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
        const procedureFilteredData = rawData
          .filter(item => 
            item.procedure === procedureTabs[selectedTabIndex].label
          )
          .map(item => ({
            procedure: item.procedure,
            insurance: item.insurance,
            oop_payment: item.amountPaidYou,
            insurance_payment: item.amountPaidInsurance,
            provider: item.provider,
          }));
        setProcedureDataTable(procedureFilteredData);

        const combinedFilteredData = rawData
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
        setCombinedDataTable(combinedFilteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAsync();
  }, [selectedTabIndex, selectedSubTabIndex, selectedSubSubTabIndex]);
  var amountPaidYouData = []
  for (let i=0; i<Object.keys(procedureDataTable).length; i++)  {
    amountPaidYouData.push(procedureDataTable[i]['oop_payment'])
  }
  const sum = amountPaidYouData.reduce((a, b) => a + b, 0);
  const avgProcedureCost = (sum / amountPaidYouData.length) || 0;
  console.log(amountPaidYouData)
  console.log('meowmeow')
  console.log(avgProcedureCost)

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
      <div className='parentContainer'>
        <div className="imageContainer" >
          <div>
            <img src={mriImage2} alt="MRI" className="mriImageContainer" />
          </div>
        </div>
        <div className="textParentContainer">
          <div className="textTitleContainer">
            <p>{procedureTabs[selectedTabIndex].label}</p>
          </div>
          <div className="priceBoxContainer">
            <div className="priceBoxContainerLeftColumn">
              <FontAwesomeIcon icon={faUserDoctor} />
            </div>
            <div className="priceBoxContainerLeftCenterColumn">
              <p>You Pay</p>
            </div>
            <div className="priceBoxContainerRightCenterColumn">
              <p>${avgProcedureCost}</p>
            </div>
            <div className="priceBoxContainerRightColumn">
              <p>(average cost)</p>
            </div>
          </div>
          <div className="bulletParentContainer">
            <div className="bulletContainer">
              <FontAwesomeIcon icon={faCheck}/>
            </div>
            <div className="bulletContainer">
              <p> Textext</p>
            </div>
          </div>
        </div>
      </div>
      <HomePageTabs
        selectedTabIndex={selectedTabIndex}
        selectedSubTabIndex={selectedSubTabIndex}
        selectedSubSubTabIndex={selectedSubSubTabIndex}
        onTabChange={handleTabChange}
      />
      <div className='parentContainer'>
        <div>
          <div className='boxContainer'>
            <BasicTable columns={columns} data={combinedDataTable} />
          </div>
        </div>
        <div>
          <div className='boxContainer'>
            <BoxPlotComponent
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={procedureDataTable}
            />
            <PieChart
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={procedureDataTable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}