import React from 'react';
import Header from "../components/Header";
import Tabs from "../components/HomePageTabs";
import LiveBills from "../components/LiveBills"

export default function HomePage() {
    return (
        <div>
            <Header />
            <LiveBills />
            <Tabs />
        </div>
    )
};