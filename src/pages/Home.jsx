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
                        size={{ base: "sm", md: "md" }}
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
                        size={{ base: "sm", md: "md" }}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </FormControl>
                <Button
                    type="submit"
                    disabled={state.submitting}
                    bg="var(--color-primary)"
                    color="white"
                    _hover={{ bg: "var(--color-secondary)" }}
                    size={{ base: "sm", md: "md" }}
                    width="100%"
                >
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
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (searchParams.get('showPrices') === 'true') {
            scrollToProcedurePanels();
        }
    }, [searchParams]);

    const scrollToProcedurePanels = () => {
        if (procedurePanelsRef.current) {
            const navbarHeight = 80;
            const yOffset = -navbarHeight - 20;
            const y = procedurePanelsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const scrollToContactForm = () => {
        contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToMission = () => {
        if (missionRef.current) {
            const navbarHeight = 80;
            const yOffset = -navbarHeight - 20;
            const y = missionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <Box>
            <Box
                minHeight={{ base: "80vh", md: "100vh" }}
                width="100%"
                position="relative"
                backgroundImage={`url(${heroImage})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundAttachment={{ base: "scroll", md: "fixed" }}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(255, 255, 255, 0.1)"
                />
                <Container
                    maxW="100%" // Change from container.xl to 100%
                    px={{ base: 4, md: 8 }} // Responsive padding
                    w="100%" // Ensure full width
                >
                    <Header onSignUpClick={scrollToContactForm} onPricesClick={scrollToProcedurePanels} onMissionClick={scrollToMission} />
                </Container>
                <VStack
                    spacing={{ base: 4, md: 8 }}
                    align="center"
                    justify="center"
                    minHeight={{ base: "calc(80vh - 80px)", md: "calc(100vh - 80px)" }}
                    textAlign="center"
                    px={{ base: 4, md: 8 }}
                    position="relative"
                    zIndex={2}
                >
                    <Heading
                        as="h1"
                        size={{ base: "xl", md: "2xl" }}
                        mb={{ base: 3, md: 6 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                        px={{ base: 2, md: 0 }}
                    >
                        <Text as="span" color="black">Shopping for</Text>{" "}
                        <Box
                            display="inline-flex"
                            position="relative"
                            width="auto"
                            minWidth={{ base: "200px", md: "300px" }}
                            maxWidth={{ base: "300px", md: "400px" }}
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
                                    <Text as="span" fontSize={{ base: "1em", md: "1.2em" }} color="white" whiteSpace="nowrap">
                                        {currentWord}
                                    </Text>
                                </motion.div>
                            </AnimatePresence>
                        </Box>{" "}
                        <Text as="span" color="black">is hard.</Text>
                    </Heading>
                    <Flex
                        gap={{ base: 2, md: 4 }}
                        direction={{ base: "column", sm: "row" }}
                        width="100%"
                        px={{ base: 4, md: 0 }}
                        justify="center"
                    >
                        <Button
                            bg="var(--color-primary)"
                            color="white"
                            size={{ base: "md", md: "lg" }}
                            fontWeight="bold"
                            borderRadius="full"
                            border="2px solid"
                            borderColor="white"
                            _hover={{ bg: "var(--color-secondary)" }}
                            onClick={scrollToProcedurePanels}
                            h={{ base: "40px", md: "48px" }}
                            px={{ base: 4, md: 6 }}
                            width={{ base: "100%", sm: "auto" }}
                        >
                            See Providers and Prices
                        </Button>
                        <Button
                            as={Link}
                            to="/join"
                            bg="white"
                            color="var(--color-primary)"
                            size={{ base: "md", md: "lg" }}
                            fontWeight="bold"
                            borderRadius="full"
                            border="2px solid"
                            borderColor="var(--color-primary)"
                            _hover={{ bg: "var(--color-secondary)", color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            h={{ base: "40px", md: "48px" }}
                            px={{ base: 4, md: 6 }}
                            width={{ base: "100%", sm: "auto" }}
                        >
                            Find Drug for You
                        </Button>
                    </Flex>
                </VStack>
            </Box>
            <Center ref={procedurePanelsRef}>
                <ProcedurePanels />
            </Center>
            <Box ref={missionRef}>
                <Headline onShopClick={scrollToProcedurePanels} />
            </Box>
            <Box ref={contactFormRef} py={{ base: 8, md: 12 }} bg="white" position="relative">
                {/* Top-left corner */}
                <Box
                    position="absolute"
                    top="10px"
                    left={{ base: "5%", md: "32%" }}
                    width={{ base: "20px", md: "40px" }}
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
                    width={{ base: "20px", md: "40px" }}
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
                    width={{ base: "20px", md: "40px" }}
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
                    width={{ base: "20px", md: "40px" }}
                    height="20px"
                    borderBottom="2px solid"
                    borderRight="2px solid"
                    borderColor="var(--color-secondary)"
                />
                <VStack spacing={{ base: 4, md: 8 }} align="center" px={{ base: 4, md: 0 }}>
                    <Heading as="h2" size={{ base: "lg", md: "xl" }} color="gray.700">
                        Stay in Touch
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxWidth="600px" textAlign="center">
                        Stay connected and join our Discord community.
                    </Text>
                    <Flex
                        gap={4}
                        alignItems="center"
                        direction={{ base: "column", sm: "row" }}
                        width={{ base: "100%", sm: "auto" }}
                    >
                        <Button
                            as={Link}
                            to="/join"
                            bg="var(--color-primary)"
                            color="white"
                            size={{ base: "md", md: "lg" }}
                            fontWeight="bold"
                            borderRadius="full"
                            _hover={{ bg: "var(--color-secondary)" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            width={{ base: "100%", sm: "auto" }}
                        >
                            Join us
                        </Button>
                        <Button
                            as="a"
                            href="https://discord.com/invite/DdaNsrVr"
                            bg="var(--color-secondary)"
                            color="white"
                            size={{ base: "md", md: "lg" }}
                            fontWeight="bold"
                            borderRadius="full"
                            _hover={{ bg: "var(--color-primary)" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            leftIcon={<FaDiscord />}
                            width={{ base: "100%", sm: "auto" }}
                        >
                            Discord
                        </Button>
                    </Flex>
                </VStack>
            </Box>

            {/* Updated Footer Section */}
            <Box bg="var(--color-primary)" color="white" py={{ base: 4, md: 6 }}>
                <Container maxW="container.xl">
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="space-between"
                        align="center"
                        px={{ base: 4, md: 0 }}
                    >
                        <Flex align="center" mb={{ base: 4, md: 0 }}>
                            <Box
                                as="img"
                                src={logo}
                                alt="Turnip Health Logo"
                                h={{ base: "30px", md: "50px" }}
                                mr={4}
                                mt="-2rem"
                                mb="-2rem"
                                objectFit="contain"
                            />
                        </Flex>
                        <Flex
                            direction={{ base: "column", sm: "row" }}
                            align="center"
                            gap={{ base: 2, sm: 4 }}
                        >
                            <Text as="a" href="/terms" color="white" _hover={{ textDecoration: "underline" }}>
                                Terms of Service
                            </Text>
                            <Text as="a" href="/privacy" color="white" _hover={{ textDecoration: "underline" }}>
                                Privacy Policy
                            </Text>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}
