import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function StitchesUnder2Point5CM() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType={"Stitches <2.5CM"}/>
        </div>
    )
};