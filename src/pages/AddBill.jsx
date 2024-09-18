import React from 'react';
import { Box, VStack, Heading, Text, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useForm, ValidationError } from '@formspree/react';
import Header from "../components/Header";
import "../styles/addbill.css"

function AddBillForm() {
    const [state, handleSubmit] = useForm("movaoqvo");
    if (state.succeeded) {
        return <Text color="green.500" fontWeight="bold">Thanks for submitting your bill!</Text>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                    <FormLabel htmlFor="insurance">Insurance</FormLabel>
                    <Input id="insurance" name="insurance" />
                    <ValidationError prefix="Insurance" field="insurance" errors={state.errors} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="city">City</FormLabel>
                    <Input id="city" name="city" />
                    <ValidationError prefix="City" field="city" errors={state.errors} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="state">State</FormLabel>
                    <Input id="state" name="state" />
                    <ValidationError prefix="State" field="state" errors={state.errors} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="procedure">Procedure (e.g. MRI)</FormLabel>
                    <Input id="procedure" name="procedure" />
                    <ValidationError prefix="Procedure" field="procedure" errors={state.errors} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="provider">Provider</FormLabel>
                    <Input id="provider" name="provider" />
                    <ValidationError prefix="Provider" field="provider" errors={state.errors} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="amount_paid_insurance">Amount Paid (Insurance)</FormLabel>
                    <Input id="amount_paid_insurance" name="amount_paid_insurance" type="number" />
                    <ValidationError prefix="Amount Paid (Insurance)" field="amount_paid_insurance" errors={state.errors} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="amount_paid_you">Amount Paid (You)</FormLabel>
                    <Input id="amount_paid_you" name="amount_paid_you" type="number" />
                    <ValidationError prefix="Amount Paid (You)" field="amount_paid_you" errors={state.errors} />
                </FormControl>
                <Button 
                    type="submit" 
                    disabled={state.submitting} 
                    bg="var(--color-primary)" 
                    color="white" 
                    _hover={{ bg: "var(--color-secondary)" }}
                >
                    Submit Bill
                </Button>
            </VStack>
        </form>
    );
}

export default function AddBillPage() {
    return (
        <Box>
            <Header />
            <Box maxWidth="600px" margin="auto" padding={8} mt={100}>
                <Heading as="h1" size="xl" textAlign="center" mb={8} color="black">
                    Add Your Medical Bill
                </Heading>
                <AddBillForm />
            </Box>
        </Box>
    )
};