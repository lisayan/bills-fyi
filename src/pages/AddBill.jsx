import React, {useState} from 'react';
import { ChakraProvider, Button, Input, Text } from "@chakra-ui/react";
import AWS from 'aws-sdk';
import Header from "../components/Header";
import "../styles/addbill.css"

export default function AddBillPage() {
    // const [formData, setFormData] = useState({
    //     insurance: '',
    //     city: '',
    //     state: '',
    //     procedure: '',
    //     provider: '',
    //     amount_paid_insurance: '',
    //     amount_paid_you: ''
    // });

    // const handleChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     });
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     await submitFormData();
    // };

    // const submitFormData = async () => {
    //     try {
    //         const dynamodb = new AWS.DynamoDB.DocumentClient();

    //         const params = {
    //             TableName: 'bills-fyi',
    //             Item: {
    //                 Procedure: formData.procedure,
    //                 Insurance: formData.insurance,

    //             },
    //             ExpressionAttributeNames: {
    //                 '#amountPaidInsurance': 'Amount Paid (Insurance)'
    //             }
    //         };
    //     }
    // };

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