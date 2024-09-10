import React, { useRef } from 'react';
import { Box, Flex, VStack, Heading, Text, Button, Center } from "@chakra-ui/react";
import Header from "../components/Header";
import ProcedurePanels from "../components/ProcedurePanels";
import Signup from "../components/Signup";
import heroImage from '../images/hero.png';

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
            <Flex 
                direction="column" 
                minHeight="100vh" 
                position="relative"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgImage={`url(${heroImage})`}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    _after={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bg: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                    }}
                />
                <Box width="100%" position="relative" zIndex={10}>
                    <Header onSignUpClick={scrollToSignup} />
                </Box>
                <VStack
                    spacing={8}
                    align="center"
                    justify="center"
                    flex={1}
                    textAlign="center"
                    px={4}
                    position="relative"
                    zIndex={1}
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