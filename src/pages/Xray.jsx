import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function Xray() {
    return (
        <div>
            <Header/>
            <DisplayData procedureIndex={1}/>
        </div>
    )
};