import React from 'react';
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import DisplayData from "../components/DisplayData";

export default function Colonoscopy() {
    return (
        <Box>
            <Header/>
            <Box pt="60px"> {/* Adjust this value based on your NavBar height */}
                <DisplayData procedureType="Colonoscopy"/>
            </Box>
        </Box>
    )
};