import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function MRIBrainPage() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType={'MRI Brain (no contrast)'}/>
        </div>
    )
};