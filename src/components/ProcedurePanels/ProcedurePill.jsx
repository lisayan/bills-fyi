import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Text, HStack, VStack, Tag, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Input, Button,
  Flex, Icon, Image, IconButton
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function ProcedurePill({ link, website, procedure, quantity, refills, price, rating, reviewCount, medication }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Select images based on procedure name
  const getImages = () => {
    if (!procedure) return [];  // Add safety check
    
    const procedureLower = procedure.toLowerCase();
    if (procedureLower.includes('eden')) {
      return ['eden1.png', 'eden2.png', 'eden3.png'];
    } else if (procedureLower.includes('friday')) {
      return ['fridays1.png', 'fridays2.png', 'fridays3.png'];
    } else if (procedureLower.includes('mochi')) {
      return ['mochi1.png', 'mochi2.png', 'mochi3.png'];
    } else if (procedureLower.includes('ro')) {
      return ['ro1.png', 'ro2.png', 'ro3.png'];
    } else if (procedureLower.includes('good')) {
      return ['good1.png', 'good2.png', 'good3.png'];
    }
    return [];  // Return empty array if no matches
  };

  const images = getImages();
  const hasImages = images && images.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    // Redirect to the website or perform any other action
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Box
        onClick={onOpen}
        width="300px"
        height="175px"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "xl",
        }}
        position="relative"
      >
        <Box bg="var(--color-primary)" height="8px" width="100%" />
        {procedure === "Mochi Health" && (
          <Tag size="sm" bg="green.100" color="gray.800" position="absolute" top="12px" left="24px">
            Turnip Verified
          </Tag>
        )}
        <Tag 
          size="sm" 
          variant="solid" 
          bg="blue.100" 
          color="gray.800"
          position="absolute"
          top="12px"
          right="24px"
        >
          Ships
        </Tag>
        <VStack align="flex-start" spacing={2} p={6}>
          <HStack justify="space-between" w="100%" alignItems="flex-start">
            <VStack align="flex-start" spacing={0}>
              <Text fontSize="24px" fontWeight="bold" color="black" lineHeight="shorter">
                {procedure}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {medication}
              </Text>
            </VStack>
            <VStack align="flex-end" spacing={0}>
              <Text fontSize="3xl" fontWeight="bold" color="black">
                ${price}
              </Text>
              <Text fontSize="sm" color="black">
                / month
              </Text>
            </VStack>
          </HStack>
          <HStack spacing={1}>
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                as={FaStar}
                boxSize={3}
                color={i < Math.floor(rating) ? "yellow.400" : "gray.300"}
              />
            ))}
            <Text fontSize="sm" color="gray.600" ml={1}>
              {rating} ({reviewCount})
            </Text>
          </HStack>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton m={0} />
          <ModalHeader pt={12} px={6} pb={6}>
            <HStack justifyContent="space-between" alignItems="flex-start" width="100%">
              <VStack align="flex-start" spacing={2}>
                <Text fontSize="2xl" fontWeight="bold">{procedure}</Text>
                <Text fontSize="md" color="gray.400">
                  This Ozempic provider offers a comprehensive weight loss program using FDA-approved medication. They provide personalized treatment plans, ongoing support, and convenient home delivery.
                </Text>
              </VStack>
              <VStack align="flex-end" spacing={0} flexShrink={0}>
                <Text fontSize="3xl" fontWeight="bold" color="black">
                  ${price}
                </Text>
                <Text fontSize="sm" color="black" alignSelf="flex-end">
                  / month
                </Text>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalBody px={8} py={6}>
            <VStack spacing={6} align="stretch">
              <HStack>
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    as={FaStar}
                    color={i < Math.floor(rating) ? "yellow.400" : "gray.300"}
                  />
                ))}
                <Text ml={2}>{rating} ({reviewCount})</Text>
              </HStack>
              
              {/* Only show image carousel if there are images */}
              {hasImages && (
                <Box position="relative">
                  <Flex justify="center" align="center" position="relative">
                    <IconButton
                      icon={<ChevronLeftIcon />}
                      onClick={prevImage}
                      position="absolute"
                      left={-6}
                      zIndex={2}
                      bg="white"
                      rounded="full"
                      border="1px solid"
                      borderColor="gray.200"
                    />
                    <Image
                      src={images[currentImageIndex]}
                      alt={`Review image ${currentImageIndex + 1}`}
                      maxH="300px"
                      objectFit="cover"
                    />
                    <IconButton
                      icon={<ChevronRightIcon />}
                      onClick={nextImage}
                      position="absolute"
                      right={-6}
                      zIndex={2}
                      bg="white"
                      rounded="full"
                      border="1px solid"
                      borderColor="gray.200"
                    />
                  </Flex>
                  <HStack justify="center" mt={2} spacing={2}>
                    {images.map((_, index) => (
                      <Box
                        key={index}
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg={index === currentImageIndex ? "blue.500" : "gray.300"}
                      />
                    ))}
                  </HStack>
                </Box>
              )}

              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <Input
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    size="lg"
                  />
                  <Button 
                    as="a" 
                    href={website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    colorScheme="green" 
                    width="100%" 
                    size="lg"
                    onClick={(e) => {
                      if (!email) {
                        e.preventDefault();
                        alert("Please enter your email before continuing.");
                      }
                    }}
                  >
                    Continue to Website
                  </Button>
                </VStack>
              </form>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}