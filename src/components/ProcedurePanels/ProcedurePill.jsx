import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Text, HStack, VStack, Tag, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Button,
  Flex, Icon, Image, IconButton
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const PartialStar = ({ fill }) => {
  return (
    <Box position="relative" display="inline-block">
      {/* Background star (gray) */}
      <Icon as={FaStar} color="gray.300" />
      {/* Foreground star (yellow, clipped) */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width={`${fill * 100}%`}
        overflow="hidden"
      >
        <Icon as={FaStar} color="yellow.400" />
      </Box>
    </Box>
  );
};

export default function ProcedurePill({ link, website, procedure, quantity, refills, price, rating, reviewCount, medication }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Flex
        onClick={onOpen}
        width="300px"
        height="190px"
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
        m={2}
        direction="column"
      >
        <Box 
          bg="var(--color-primary, #7013C4)" 
          height="8px" 
          width="100%" 
          position="relative"
          zIndex={1}
        />
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
        <VStack align="flex-start" spacing={2} p={6} flex={1} justify="space-between">
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
          
          <HStack spacing={1} w="100%">
            {[...Array(5)].map((_, i) => {
              const fill = Math.min(Math.max(rating - i, 0), 1);
              return <PartialStar key={i} fill={fill} />;
            })}
            <Text fontSize="sm" color="gray.600" ml={1}>
              {rating} ({reviewCount})
            </Text>
          </HStack>
        </VStack>
      </Flex>

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
                {[...Array(5)].map((_, i) => {
                  const fill = Math.min(Math.max(rating - i, 0), 1);
                  return <PartialStar key={i} fill={fill} />;
                })}
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

              <Button 
                as="a" 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                colorScheme="green" 
                width="100%" 
                size="lg"
              >
                Continue to Website
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}