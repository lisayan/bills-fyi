import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    
    // Show a success toast
    toast({
      title: "Thanks for signing up!",
      description: "We'll keep you updated on our progress.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear the input
    setEmail('');
  };

  return (
    <Box bg="gray.50" py={16} px={4}>
      <VStack spacing={8} maxWidth="600px" mx="auto" textAlign="center">
        <Heading as="h2" size="xl">
          Get Early Access
        </Heading>
        <Text fontSize="lg">
          Be the first to know when we launch. Sign up for early access and exclusive updates.
        </Text>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="lg"
              bg="white"
            />
            <Button
              type="submit"
              bg="var(--color-primary)"
              color="white"
              size="lg"
              width="full"
              _hover={{
                bg: "var(--color-secondary)"
              }}
            >
              Sign Up for Early Access
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}