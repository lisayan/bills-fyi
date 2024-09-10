import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function XRayChest() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType={"X-ray Chest"}/>
        </div>
    )
};