import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";
import LiveBills from "../components/LiveBills"

export default function HomePage() {
    return (
        <div>
            <Header />
            <LiveBills />
            {/* <DisplayData /> */}
        </div>
    )
};