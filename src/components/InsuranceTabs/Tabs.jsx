import React from "react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import tabContainer from '../../styles/Tabs.css'

export default function InsuranceTabs(props) {
// 1. Create the component
function DataTabs({ data }) {
    return (
        <div className='tabContainer'>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    {data.map((tab, index) => (
                        <Tab key={index}>{tab.label}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {data.map((tab, index) => (
                        <TabPanel p={4} key={index}>
                        {tab.content}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </div>
    )
}

// 2. Create an array of data
const tabData = [
    {
        label: 'Aetna',
        content: '(Info for Aetna)'
    },
    {
        label: 'BlueCross',
        content: '(Info for BlueCross)'
    }
]

// 3. Pass the props and chill!
return <DataTabs data={tabData} />
}