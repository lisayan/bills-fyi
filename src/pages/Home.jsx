import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, VStack, Heading, Text, Button, Center, FormControl, FormLabel, Input, Textarea, Container } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import ProcedurePanels from "../components/ProcedurePanels";
import Headline from '../components/Headline';
import Signup from "../components/Signup";
import heroImage from '../images/fixed_branding_bg.jpg';
import { useForm, ValidationError } from '@formspree/react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaHospital, FaPills, FaUserMd, FaHeartbeat, FaDiscord, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import logo from '../images/full_logo.jpeg';

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
    const [currentWord, setCurrentWord] = useState("Ozempic");
    const words = ["Ozempic", "Wegovy", "Mounjaro"];
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(prevWord => {
                const currentIndex = words.indexOf(prevWord);
                return words[(currentIndex + 1) % words.length];
            });
        }, 2000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Check for prices=true in URL params
        if (searchParams.get('showPrices') === 'true') {
            scrollToProcedurePanels();
        }
    }, [searchParams]); // Run when searchParams changes

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
                        bg: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)',
                    }}
                >
                </Box>
                <Container maxW="container.xl" position="relative" zIndex={10}>
                    <Header onSignUpClick={scrollToContactForm} onPricesClick={scrollToProcedurePanels} onMissionClick={scrollToMission}/>
                </Container>
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
                    <Heading as="h1" size="2xl" mb={6} display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
                        <Text as="span" color="black">Shopping for</Text>{" "}
                        <Box
                            display="inline-flex"
                            position="relative"
                            width="auto"
                            minWidth="300px"
                            maxWidth="400px"
                            height="1.5em"
                            justifyContent="center"
                            alignItems="center"
                            mx={2}
                            overflow="hidden"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentWord}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Text as="span" fontSize="1.2em" color="white" whiteSpace="nowrap">
                                        {currentWord}
                                    </Text>
                                </motion.div>
                            </AnimatePresence>
                        </Box>{" "}
                        <Text as="span" color="black">is hard.</Text>
                    </Heading>
                    <Flex gap={4}>
                        <Button
                            bg="var(--color-primary)"
                            color="white"
                            size="lg"
                            fontWeight="bold"
                            borderRadius="full"
                            borderWidth={2}
                            borderColor="white"
                            _hover={{ bg: "var(--color-secondary)" }}
                            onClick={scrollToProcedurePanels}
                            style={{ boxShadow: '0 0 0 2px rgba(255, 255, 255, 1.0)' }}
                        >
                            See Providers and Prices
                        </Button>
                        <Button
                            as={Link}
                            to="/join"
                            bg="var(--color-secondary)"
                            color="white"
                            size="lg"
                            fontWeight="bold"
                            borderRadius="full"
                            borderWidth={2}
                            _hover={{ bg: "var(--color-primary)", color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Find Drug for You
                        </Button>
                    </Flex>
                </VStack>
            </Flex>
            <Center ref={procedurePanelsRef}>
                <ProcedurePanels />
            </Center>
            <Box ref={missionRef}>
                <Headline onShopClick={scrollToProcedurePanels} />
            </Box>
            <Box ref={contactFormRef} py={12} bg="white" position="relative">
                {/* Top-left corner */}
                <Box
                    position="absolute"
                    top="10px"
                    left={{ base: "5%", md: "32%" }}
                    width={{ base: "40px", md: "20px" }}
                    height="20px"
                    borderTop="2px solid"
                    borderLeft="2px solid"
                    borderColor="var(--color-secondary)"
                />
                {/* Top-right corner */}
                <Box
                    position="absolute"
                    top="10px"
                    right={{ base: "5%", md: "32%" }}
                    width={{ base: "40px", md: "20px" }}
                    height="20px"
                    borderTop="2px solid"
                    borderRight="2px solid"
                    borderColor="var(--color-secondary)"
                />
                {/* Bottom-left corner */}
                <Box
                    position="absolute"
                    bottom="10px"
                    left={{ base: "5%", md: "32%" }}
                    width={{ base: "40px", md: "20px" }}
                    height="20px"
                    borderBottom="2px solid"
                    borderLeft="2px solid"
                    borderColor="var(--color-secondary)"
                />
                {/* Bottom-right corner */}
                <Box
                    position="absolute"
                    bottom="10px"
                    right={{ base: "5%", md: "32%" }}
                    width={{ base: "40px", md: "20px" }}
                    height="20px"
                    borderBottom="2px solid"
                    borderRight="2px solid"
                    borderColor="var(--color-secondary)"
                />
                <VStack spacing={8} align="center">
                    <Heading as="h2" size="xl" color="gray.700">
                        Stay in Touch
                    </Heading>
                    <Text fontSize="lg" color="gray.600" maxWidth="600px" textAlign="center">
                        Stay connected and join our Discord community.
                    </Text>
                    <Flex gap={4} alignItems="center">
                        <Button
                            as={Link}
                            to="/join"
                            bg="var(--color-primary)"
                            color="white"
                            size="lg"
                            fontWeight="bold"
                            borderRadius="full"
                            _hover={{ bg: "var(--color-secondary)" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join us
                        </Button>
                        <Button
                            as="a"
                            href="https://discord.com/invite/DdaNsrVr"
                            bg="var(--color-secondary)"
                            color="white"
                            size="lg"
                            fontWeight="bold"
                            borderRadius="full"
                            _hover={{ bg: "var(--color-primary)" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<FaDiscord />}
                        >
                            Discord
                        </Button>
                    </Flex>
                </VStack>
            </Box>
            
            {/* Updated Footer Section */}
            <Box bg="var(--color-primary)" color="white" py={6}>
                <Container maxW="container.xl">
                    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
                        <Flex align="center" mb={{ base: 4, md: 0 }}>
                            <Box 
                                as="img" 
                                src={logo} 
                                alt="Turnip Health Logo" 
                                h={{ base: "35px", md: "50px" }}  // Increased height significantly
                                mr={4} 
                                mt="-2rem"  // Negative margin to pull it up
                                mb="-2rem"  // Negative margin to pull it down
                                objectFit="contain"  // Ensures the image maintains its aspect ratio
                            />
                        </Flex>
                        <Flex direction={{ base: "column", sm: "row" }} align="center">
                            <Text as="a" href="/terms" mx={2} my={{ base: 1, sm: 0 }} color="white" _hover={{ textDecoration: "underline" }}>Terms of Service</Text>
                            <Text as="a" href="/privacy" mx={2} my={{ base: 1, sm: 0 }} color="white" _hover={{ textDecoration: "underline" }}>Privacy Policy</Text>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}
