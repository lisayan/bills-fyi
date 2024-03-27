import React from 'react';
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

export default function AddBillPage() {
    return (
        <div>
            <Header />
            <Box p={4} borderWidth="1px" borderRadius="lg">
                <Text fontSize="lg" fontWeight="bold">Add Bill Page</Text>
                {/* Content of the new page */}
            </Box>
        </div>
    )
};