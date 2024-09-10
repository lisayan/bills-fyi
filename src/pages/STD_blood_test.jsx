import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function STDBloodTest() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType={'STD Blood Test'}/>
        </div>
    )
};