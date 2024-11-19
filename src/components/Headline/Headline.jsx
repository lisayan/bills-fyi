import React from 'react';
import { Box, Heading, Text, Button, Image, VStack, Container, SimpleGrid, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from 'react-router-dom';

import doctorImage from "../../images/doctor.jpg";
import computerImage from "../../images/computer.jpg";
import scaleImage from "../../images/scale.jpg";

export default function OzempicSolutions({ onShopClick }) {
  const questions = [
    "Looking for weight loss solutions?",
    "Struggling with diabetes management?",
    "Need help finding affordable medication?",
    "Want personalized healthcare advice?"
  ];

  const totalWidth = questions.join(' ').length * 20;

  const containerData = [
    {
      image: doctorImage,
      title: "Get your recommendations",
      description: "We will recommend the best weight loss solutions based on your needs (price, provider availability, type of medication, locations).",
      buttonText: "COMING SOON",
      buttonLink: "/join",
      buttonAttributes: {
        target: "_blank",
        rel: "noopener noreferrer"
      },
    },
    {
      image: computerImage,
      title: "Shop the best solution for you",
      description: "There are so many options to choose from. We compile all you need to know about picking the best medication for you on Ozzi Health.",
      buttonText: "Shop now",
      buttonAction: onShopClick,
    },
    {
      image: scaleImage,
      title: "Start your weight loss journey",
      description: "We are so proud of you for getting started! Decision paralysis is real and we are here to help.",
      buttonText: "Start now",
      buttonLink: "/join",
      buttonAttributes: {
        target: "_blank",
        rel: "noopener noreferrer"
      },
    },
  ];

  return (
    <Box width="100%">
      <Container maxW="container.xl" py={10}>
        {/* Scrolling questions with fading edges */}
        <Box 
          position="relative" 
          height="60px"
          mb={6}
          overflow="hidden"
          borderBottom="2px solid rgba(255, 255, 255, 0.7)"
          pb={4}
        >
          {/* Add gradient overlays for fading effect */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={1}
            pointerEvents="none"
            bgGradient="linear(to-r, white, transparent 10%, transparent 90%, white)"
          />
          
          <motion.div
            animate={{ x: [0, -totalWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              position: 'absolute',
              whiteSpace: 'nowrap',
              display: 'flex',
              bottom: '8px',
            }}
          >
            {[...questions, ...questions].map((question, index) => (
              <Heading key={index} as="h1" size="xl" color="var(--color-primary)" mr={8} fontWeight="normal">
                {question}
              </Heading>
            ))}
          </motion.div>
        </Box>

        {/* Three main content sections */}
        <SimpleGrid columns={[1, null, 3]} spacing={12} mt={12}>
          {containerData.map((data, index) => (
            <Box key={index} position="relative" p={10} maxW="sm" mx="auto" height="100%" display="flex" flexDirection="column">
              {/* Corner boxes */}
              <Box
                position="absolute"
                top="10px"
                left="10px"
                width="20px"
                height="20px"
                borderTop="2px solid"
                borderLeft="2px solid"
                borderColor="var(--color-secondary)"
              />
              <Box
                position="absolute"
                top="10px"
                right="10px"
                width="20px"
                height="20px"
                borderTop="2px solid"
                borderRight="2px solid"
                borderColor="var(--color-secondary)"
              />
              <Box
                position="absolute"
                bottom="10px"
                left="10px"
                width="20px"
                height="20px"
                borderBottom="2px solid"
                borderLeft="2px solid"
                borderColor="var(--color-secondary)"
              />
              <Box
                position="absolute"
                bottom="10px"
                right="10px"
                width="20px"
                height="20px"
                borderBottom="2px solid"
                borderRight="2px solid"
                borderColor="var(--color-secondary)"
              />

              <Image
                src={data.image}
                alt={`Image for ${data.title}`}
                width="100%"
                height="180px"
                objectFit="cover"
                borderRadius="md"
                mb={4}
              />
              <VStack align="start" spacing={3} flex={1}>
                <Heading as="h2" size="md" color="black" fontWeight="semibold">
                  {data.title}
                </Heading>
                <Text fontSize="md" color="gray.600" fontWeight="medium">
                  {data.description}
                </Text>
                <Spacer />
                <Button 
                  as={data.buttonLink ? RouterLink : undefined}
                  to={data.buttonLink}
                  onClick={data.buttonAction}
                  bg="var(--color-primary)" 
                  color="white" 
                  size="md" 
                  borderRadius="full"
                  _hover={{ bg: "var(--color-secondary)" }}
                  mt="auto"
                  {...data.buttonAttributes}
                >
                  {data.buttonText}
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
