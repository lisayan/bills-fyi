import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function CTHeadBrainNoContrast() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType="CT Head/Brain (no contrast)"/>
        </div>
    )
};