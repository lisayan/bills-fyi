import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function MRIShoulderArmHandNoContrast() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType={'MRI Shoulder/Arm/Hand (no contrast)'}/>
        </div>
    )
};