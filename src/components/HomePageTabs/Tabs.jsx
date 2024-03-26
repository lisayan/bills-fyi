import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { tabContainer } from '../../styles/Tabs.css';

export default function HomePageTabs(props) {
    // 1. Create the component
    function DataTabs({ data }) {
      return (
        <div className='tabContainer'>
            <Tabs align='start' variant="line" colorScheme="green">
                <TabList>
                    {data.map((tab, index) => (
                    <Tab key={index} fontWeight="bold">{tab.label}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {data.map((tab, index) => (
                    <TabPanel p={4} px={0} key={index}>
                        {tab.content}
                        {/* Subtabs */}
                        <Tabs variant="solid-rounded" colorScheme="green" size='sm'>
                            <TabList>
                                {tab.subTabs.map((subTab, subIndex) => (
                                <Tab key={subIndex}>{subTab.label}</Tab>
                                ))}
                            </TabList>
                            <TabPanels>
                                {tab.subTabs.map((subTab, subIndex) => (
                                <TabPanel p={4} px={0} key={subIndex}>
                                    {subTab.content}
                                    {/* Second layer of subtabs */}
                                    <Tabs variant="soft-rounded" colorScheme="green" size='sm'>
                                        <TabList>
                                            {subTab.subTabs.map((secondSubTab, secondSubIndex) => (
                                            <Tab key={secondSubIndex} fontSize="sm">{secondSubTab.label}</Tab>
                                            ))}
                                        </TabList>
                                        <TabPanels>
                                            {subTab.subTabs.map((secondSubTab, secondSubIndex) => (
                                            <TabPanel p={2} key={secondSubIndex}>
                                                {secondSubTab.content}
                                            </TabPanel>
                                            ))}
                                        </TabPanels>
                                    </Tabs>
                                </TabPanel>
                                ))}
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </div>
      );
    }

    const providerTabs =
    [
        {
            label: "Dr. Wang",
            content: "(Second Subtab A1 content)"
        },
        {
            label: "Dr. Yan",
            content: "(Second Subtab A2 content)"
        },
        {
            label: "Dr. Zang",
            content: "(Second Subtab A2 content)"
        }
    ]

    const insuranceTabs = [
        {
          label: "Aetna",
          content: "",
          subTabs: providerTabs
        },
        {
          label: "BlueCross",
          content: "",
          subTabs: providerTabs
        }
      ]

    const procedureTabs = [
        {
          label: "MRI",
          content: "",
          subTabs: insuranceTabs
        },
        {
          label: "X-Ray",
          content: "",
          subTabs: insuranceTabs
        }
    ];
  
    // 2. Pass the props and chill!
    return <DataTabs data={procedureTabs} />;
}