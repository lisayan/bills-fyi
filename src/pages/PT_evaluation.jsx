import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function PTEvaluation() {
    return (
        <div>
            <Header/>
            <DisplayData procedureIndex={0}/>
        </div>
    )
};