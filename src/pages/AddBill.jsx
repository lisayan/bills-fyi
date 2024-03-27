import React from 'react';
import { ChakraProvider, Button, Input, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import "../styles/addbill.css"

export default function AddBillPage() {
    return (
        <div>
            <Header />
            <Text fontSize="30px" fontWeight="bold" marginBottom="20px" align="center">Add Your Medical Bill</Text>
            <form className="addBillForm">
                <Input className="input-field"
                    placeholder="Insurance" />
                <Input className="input-field"
                    placeholder="City" />
                <Input className="input-field"
                    placeholder="State" />
                <Input className="input-field"
                    placeholder="Procedure (e.g. MRI)" />
                <Input className="input-field"
                    placeholder="Provider" />
                <Input className="input-field"
                    placeholder="Amount Paid (Insurance)" />
                <Input className="input-field"
                    placeholder="Amount Paid (You)" />
                <Button className="submitButton"
                    type="submit">Submit Bill</Button>
            </form>
        </div>
    )
};