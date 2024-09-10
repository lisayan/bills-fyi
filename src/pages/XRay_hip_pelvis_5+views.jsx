import React from 'react';
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function XRayHipPelvis5Views() {
    return (
        <div>
            <Header/>
            <DisplayData procedureType={"X-ray Hip/Pelvis (5+ Views)"}/>
        </div>
    )
};