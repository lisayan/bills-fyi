import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Text, HStack, VStack, Tag, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Input, Button,
  Flex, Icon
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export default function ProcedurePill({ link, website, procedure, quantity, refills, price, rating, reviewCount, medication }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    // Redirect to the website or perform any other action
  };

  console.log(website);

  return (
    <>
      <Box
        onClick={onOpen}
        width="300px"
        height="160px"
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
        <Tag size="sm" bg="green.100" color="gray.800" position="absolute" top="12px" left="24px">
          Turnip Verified
        </Tag>
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
        <VStack align="flex-start" spacing={4} p={6}>
          <HStack justify="space-between" w="100%" alignItems="flex-start" mt={2}>
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