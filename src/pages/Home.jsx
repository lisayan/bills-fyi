import React, { useRef } from 'react';
import { Box, Flex, VStack, Heading, Text, Button, Center, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import Header from "../components/Header";
import ProcedurePanels from "../components/ProcedurePanels";
import Mission from '../components/Mission';  // Make sure this import is correct
import Signup from "../components/Signup";
import heroImage from '../images/hero.png';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

function ContactForm() {
    const [state, handleSubmit] = useForm("mblrezjy");
    if (state.succeeded) {
        return <Text color="green.500" fontWeight="bold">Thanks for joining!</Text>;
    }
    return (
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message">Message (Optional)</FormLabel>
            <Textarea
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </FormControl>
          <Button type="submit" disabled={state.submitting} bg="var(--color-primary)" color="white" _hover={{ bg: "var(--color-secondary)" }}>
            Sign Up
          </Button>
        </VStack>
      </form>
    );
  }

export default function HomePage() {
    const procedurePanelsRef = useRef(null);
    const contactFormRef = useRef(null);
    const missionRef = useRef(null);

    const scrollToProcedurePanels = () => {
        if (procedurePanelsRef.current) {
            const navbarHeight = 80; // Adjust this value to match your navbar height
            const yOffset = -navbarHeight - 20; // Additional 20px for some extra space
            const y = procedurePanelsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const scrollToContactForm = () => {
        contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToMission = () => {
        if (missionRef.current) {
            const navbarHeight = 80; // Adjust this value to match your navbar height
            const yOffset = -navbarHeight - 20; // Additional 20px for some extra space
            const y = missionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
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
                    <Header onSignUpClick={scrollToContactForm} onPricesClick={scrollToProcedurePanels} onMissionClick={scrollToMission}/>
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
                        We hate medical bills too.
                    </Heading>
                    <Text fontSize="xl" color="gray.600" maxWidth="600px">
                        Crowdsourcing the prices of healthcare services for everyone to access.
                    </Text>
                    <Flex gap={4}>
                        <Button
                            bg="var(--color-primary)"
                            color="white"
                            size="lg"
                            fontWeight="bold"
                            borderRadius="full"
                            _hover={{ bg: "var(--color-secondary)" }}
                            onClick={scrollToProcedurePanels}
                        >
                            See Prices
                        </Button>
                        <Button
                            bg="var(--color-secondary)"
                            color="white"
                            size="lg"
                            fontWeight="bold"
                            borderRadius="full"
                            borderWidth={2}
                            borderColor="var(--color-primary)"
                            _hover={{ bg: "var(--color-primary)", color: "white" }}
                            onClick={scrollToMission}
                        >
                            Join the Fight
                        </Button>
                    </Flex>
                </VStack>
            </Flex>
            <Center ref={procedurePanelsRef}>
                <ProcedurePanels />
            </Center>
            <Box ref={missionRef}>
                <Mission/>  {/* Added Mission component here */}
            </Box>
            <Box ref={contactFormRef} py={12} bg="white">
                <VStack spacing={8} align="center">
                    <Heading as="h2" size="xl" color="gray.700">
                        Stay Updated
                    </Heading>
                    <Text fontSize="lg" color="gray.600" maxWidth="600px" textAlign="center">
                        Sign up to receive updates on healthcare costs and new features.
                    </Text>
                    <Box width="100%" maxWidth="400px">
                        <ContactForm />
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}