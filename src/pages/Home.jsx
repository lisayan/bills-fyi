import React, { useRef } from 'react';
import { Box, Flex, VStack, Heading, Text, Button, Center } from "@chakra-ui/react";
import Header from "../components/Header";
import ProcedurePanels from "../components/ProcedurePanels";
import Signup from "../components/Signup";

export default function HomePage() {
    const procedurePanelsRef = useRef(null);
    const signupSectionRef = useRef(null);

    const scrollToProcedurePanels = () => {
        procedurePanelsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSignup = () => {
        signupSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box>
            <Flex direction="column" minHeight="100vh" bg="gray.50">
                <Box width="100%" position="absolute" top={0} zIndex={10}>
                    <Header onSignUpClick={scrollToSignup} />
                </Box>
                <VStack
                    spacing={8}
                    align="center"
                    justify="center"
                    flex={1}
                    textAlign="center"
                    px={4}
                    pt={20}
                >
                    <Heading as="h1" size="2xl" color="gray.800">
                        Healthcare Costs Made Clear
                    </Heading>
                    <Text fontSize="xl" color="gray.600" maxWidth="600px">
                        Navigate medical billing with ease. Get transparent pricing and 
                        understand your healthcare costs in simple terms.
                    </Text>
                    <Button
                        colorScheme="orange"
                        size="lg"
                        fontWeight="bold"
                        onClick={scrollToProcedurePanels}
                    >
                        Check Procedure Costs
                    </Button>
                </VStack>
            </Flex>
            <Center ref={procedurePanelsRef}>
                <ProcedurePanels />
            </Center>
            <Box ref={signupSectionRef}>
                <Signup />
            </Box>
        </Box>
    );
}