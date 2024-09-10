import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function ImplantableCardiacRecorderLoop() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType="Cardiac Recorder Loop"/>
        </div>
    )
};