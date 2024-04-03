import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import HomePageTabs from './HomePageTabs/Tabs.jsx';
import BoxPlotComponent from './SummaryBoxPlots/Boxplots.jsx';
import { dataObject } from '../../data/data.jsx';
import PieChart from './SummaryPieCharts/PieCharts.jsx';
import { boxContainer, parentContainer } from '../../styles/plots.css';

export default function DisplayData() {
  // DDB testing
  useEffect(() => {
    // Configure AWS SDK with your region
    AWS.config.update({ region: 'us-east-2' });
    AWS.config.update({
      accessKeyId: 'AKIA6ODUZTKWCTGNDVLT',
      secretAccessKey: '',
      region: 'us-east-2'
    });

    // Create an STS client
    const sts = new AWS.STS();

    // Parameters for assuming the IAM role
    const params = {
      RoleArn: 'arn:aws:iam::992382393004:role/BillsExposedDynamoDBAccess',
      RoleSessionName: 'Session0', // Provide a session name
    };

    // Assume the IAM role
    sts.assumeRole(params, (err, data) => {
      if (err) {
        console.error('Error assuming IAM role:', err);
        return;
      }
    })

    //   // Use the temporary credentials to make authenticated requests
    //   const credentials = {
    //     accessKeyId: data.Credentials.AccessKeyId,
    //     secretAccessKey: data.Credentials.SecretAccessKey,
    //     sessionToken: data.Credentials.SessionToken,
    //   };

    //   // Now you can use these temporary credentials to access AWS services
    //   const dynamodb = new AWS.DynamoDB({ credentials });

    //   // Example: Query DynamoDB table
    //   dynamodb.query({ TableName: 'YOUR_TABLE_NAME', KeyConditionExpression: 'PK = :pk' }, (err, data) => {
    //     if (err) {
    //       console.error('Error querying DynamoDB table:', err);
    //       return;
    //     }
    //     console.log('DynamoDB query result:', data);
    //   });
    // });
  }, []);


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
    } else if (tab==="insurance")  {
      setSelectedSubTabIndex(index)
    }
    else if (tab==="provider") {
      setSelectedSubSubTabIndex(index);
    }
  };
  
  return (
    <div>
      <HomePageTabs selectedTabIndex={selectedTabIndex}
          selectedSubTabIndex={selectedSubTabIndex}
          selectedSubSubTabIndex={selectedSubSubTabIndex}
          onTabChange={handleTabChange}/>
      <div className='parentContainer'>
        <div>
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