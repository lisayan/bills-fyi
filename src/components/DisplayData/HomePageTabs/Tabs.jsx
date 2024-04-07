    import React, { useState } from "react";
    import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
    import { tabContainer } from '../../../styles/tabs.css';
    import { procedureTabs } from '../../../data/data.jsx';

    export default function HomePageTabs({ selectedTabIndex, selectedSubTabIndex, selectedSubSubTabIndex, onTabChange}) {
        // State to keep track of selected tabs and subtabs

        // 1. Create the component
        function DataTabs({ data }) {
        return (
            <div className='tabContainer'>
                <Tabs align='start' variant="line" index= {selectedTabIndex} onChange={(index) => onTabChange(index, "procedure")}>
                    <TabList>
                        {data.map((tab, index) => (
                        <Tab key={index} index={selectedTabIndex} _selected={{color: "primary.400"}} fontWeight="bold">
                            {tab.label}
                        </Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {data.map((tab, index) => (
                        <TabPanel p={4} px={2} key={index}>
                            <TabPanel p={0} px={-2} key={index}>
                                <Box fontSize="med" fontWeight="bold" color="gray.500">
                                    {tab.content}
                                </Box>
                            {/* Rest of your code */}
                            </TabPanel>
                            {/* Subtabs */}
                            <Tabs variant="solid-rounded" size='sm' index= {selectedSubTabIndex} onChange={(index) => onTabChange(index, "insurance")}>
                                <TabList>
                                    {tab.subTabs.map((subTab, subIndex) => (
                                    <Tab key={subIndex} _selected={{bg: "primary.400", color: "black"}}>
                                        {subTab.label}
                                    </Tab>
                                    ))}
                                </TabList>
                                <TabPanels>
                                    {tab.subTabs.map((subTab, subIndex) => (
                                    <TabPanel p={4} px={0} key={subIndex}>
                                        <Box fontSize="med" fontWeight="bold" color="gray.500">
                                            {subTab.content}
                                        </Box>
                                        {/* Second layer of subtabs */}
                                        <Tabs variant="soft-rounded" color="#3b413c" size='sm' index= {selectedSubSubTabIndex} onChange={(index) => onTabChange(index, "provider")}>
                                            <TabList>
                                                {subTab.subTabs.map((secondSubTab, secondSubIndex) => (
                                                <Tab key={secondSubIndex} fontSize="sm" _selected={{bg: "primary.400", color: "black"}}>
                                                    {secondSubTab.label}
                                                </Tab>
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
    
        // 2. Pass the props and chill!
        return <DataTabs data={procedureTabs} />;
    }