import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function Colonoscopy() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType="Colonoscopy"/>
        </div>
    )
};