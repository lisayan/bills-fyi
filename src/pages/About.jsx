import React from 'react';
import Header from "../components/Header";
import { Container, VStack, Box, Text, Image, Link, Heading, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ethan from '../images/ethan.png';
import lisa from '../images/lisa.png';
import serena from "../images/serena.png";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <Container maxW="6xl" py={40} px={8}>
                <VStack spacing={6} align="center" mb={16}>
                    <Heading 
                        as="h1" 
                        size="2xl" 
                        textAlign="center" 
                        color="black"
                        bgGradient="linear(to-r, var(--color-primary), var(--color-secondary))"
                        bgClip="text"
                        letterSpacing="tight"
                    >
                        Meet the Leadership Team
                    </Heading>
                    <Text fontSize="xl" textAlign="center" color="gray.600" maxW="3xl">
                        We've combined the best of healthcare leaders and enterprise SaaS experts to lead us towards reducing financial complexity.
                    </Text>
                </VStack>

                <Box bg="gray.50" p={10} borderRadius="xl" mb={16}>
                    <VStack spacing={6} align="stretch">
                        <Text fontSize="lg" color="gray.700">
                            At Turnip Health, we understand that the journey of managing obesity and achieving weight loss can be deeply personal and often challenging. The stigma, the frustration of being told to simply "eat better" and "exercise more"—it's disheartening. That's why we're here to make a difference.
                        </Text>
                        <Text fontSize="lg" color="gray.700">
                            We created Turnip Health to help you take the next step toward a healthier, more confident life. Navigating GLP-1 treatments shouldn't be overwhelming. From selecting the right medication to comparing prices and finding a trusted provider, we're here to simplify the process. Turnip Health is your go-to resource for finding the best GLP-1 solution tailored to your needs. Let's make your weight-loss journey as seamless and empowering as it should be.
                        </Text>
                        <Text fontSize="lg" fontStyle="italic" color="gray.700">
                            Sincerely,<br/>
                            Ethan, Lisa, and Serena
                        </Text>
                    </VStack>
                </Box>

                <SimpleGrid columns={[1, null, 3]} spacing={10} justifyItems="center">
                    <VStack spacing={4}>
                        <Box 
                            borderRadius="xl" 
                            overflow="hidden"
                            boxShadow="lg"
                            transition="transform 0.2s"
                            _hover={{ transform: 'scale(1.02)' }}
                        >
                            <Image src={ethan} width="300px" height="300px" objectFit="cover"/>
                        </Box>
                        <Text fontSize="xl" fontWeight="bold" color="black">Ethan Zang</Text>
                        <Link href='https://www.linkedin.com/in/ethanzang/' isExternal color="black" _hover={{ color: "blue.500" }}>
                            LinkedIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </VStack>

                    <VStack spacing={4}>
                        <Box 
                            borderRadius="xl" 
                            overflow="hidden"
                            boxShadow="lg"
                            transition="transform 0.2s"
                            _hover={{ transform: 'scale(1.02)' }}
                        >
                            <Image src={lisa} width="300px" height="300px" objectFit="cover"/>
                        </Box>
                        <Text fontSize="xl" fontWeight="bold" color="black">Lisa Yan</Text>
                        <Link href='https://www.linkedin.com/in/elizabeth-lisa-yan-32254989/' isExternal color="black" _hover={{ color: "blue.500" }}>
                            LinkedIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </VStack>

                    <VStack spacing={4}>
                        <Box 
                            borderRadius="xl" 
                            overflow="hidden"
                            boxShadow="lg"
                            transition="transform 0.2s"
                            _hover={{ transform: 'scale(1.02)' }}
                        >
                            <Image src={serena} width="300px" height="300px" objectFit="cover"/>
                        </Box>
                        <Text fontSize="xl" fontWeight="bold" color="black">Serena Wang</Text>
                        <Link href='https://www.linkedin.com/in/serena-w-719011b2/' isExternal color="black" _hover={{ color: "blue.500" }}>
                            LinkedIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </VStack>
                </SimpleGrid>
            </Container>
        </div>
    )
};