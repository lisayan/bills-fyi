import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function MRILegNoContrast() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType={'MRI Leg (no contrast)'}/>
        </div>
    )
};