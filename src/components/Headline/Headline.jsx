import React from 'react';
import { Box, Heading, Text, Button, Image, VStack, Container, SimpleGrid, Center } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

// Replace these with your own icons/images
import checklistIcon from "../../images/scale.jpg";
import computerIcon from "../../images/computer.jpg";
import providerIcon from "../../images/doctor.jpg";

export default function Headline({ onShopClick }) {
  const steps = [
    {
      icon: computerIcon,
      title: "Learn about weight loss with GLP-1 medications",
      description: "Understand how GLP-1 medications work and their role in sustainable weight loss",
      buttonText: "Learn More",
      buttonLink: "/learn_more",
    },
    {
      icon: providerIcon,
      title: "Meet our team of experts",
      description: "Learn about the team of doctors and engineers working to make GLP-1 medication pricing transparent",
      buttonText: "About Us",
      buttonLink: "/about",
    },
    {
      icon: checklistIcon,
      title: "Begin your weight loss journey",
      description: "Fill out our simple form to help us understand your goals and create a personalized weight loss plan",
      buttonText: "Start Now",
      buttonLink: "/join",
    }
  ];

  return (
    <Box width="100%" bg="white" py={16}>
      <Container maxW="container.xl" px={4}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb={16}
          fontWeight="normal"
          bgGradient="linear(to-r, purple.600, purple.400)"
          bgClip="text"
          fontSize={["3xl", "4xl", "5xl"]} // Responsive font size
          lineHeight={1.2} // Adjust line height
          width="100%"
          mx="auto"
          px={4} // Add padding on the sides
          whiteSpace="normal" // Ensure text wraps properly
        >
          Wondering how to get started? It's as easy as 1-2-3!
        </Heading>

        <SimpleGrid columns={[1, null, 3]} spacing={12}>
          {steps.map((step, index) => (
            <VStack key={index} align="center" spacing={6}>
              <Center
                bg="white"
                w="120px"
                h="120px"
                borderRadius="full"
                mb={4}
                overflow="hidden"
              >
                <Image
                  src={step.icon}
                  alt={step.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Center>
              <Heading
                as="h3"
                size="lg"
                textAlign="center"
                fontWeight="bold"
                bgGradient="linear(to-r, purple.600, purple.400)"
                bgClip="text"
              >
                {step.title}
              </Heading>
              <Text
                fontSize="lg"
                textAlign="center"
                color="black"
              >
                {step.description}
              </Text>
              <Button
                as={RouterLink}
                to={step.buttonLink}
                variant="link"
                bgGradient="linear(to-r, purple.600, purple.400)"
                bgClip="text"
                textDecoration="underline"
                fontSize="lg"
                alignSelf="center"
                _hover={{
                  opacity: 0.8
                }}
              >
                {step.buttonText} →
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}