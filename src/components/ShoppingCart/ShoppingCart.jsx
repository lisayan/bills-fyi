import React from 'react';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';

const ShoppingCart = () => {
  // You can add state here for cart items if needed
  // const [cartItems, setCartItems] = useState([]);

  return (
    <Box maxWidth="800px" margin="0 auto" padding="20px" paddingTop="150px">
      <Heading as="h1" size="xl" marginBottom="20px">Your Procedures "Cart"</Heading>
      
      <VStack spacing={4} align="stretch">
        {/* This is a placeholder. You'll want to map over actual cart items */}
        <Box borderWidth="1px" borderRadius="lg" padding="15px">
          <Text fontSize="lg">Sample Item</Text>
          <Text>Price: $XX.XX</Text>
          <Button size="sm" colorScheme="red" marginTop="10px">Remove</Button>
        </Box>
        
        {/* Add more items here or map over an array of cart items */}
        
        <Box marginTop="20px">
          <Text fontSize="xl" fontWeight="bold">Total: $XX.XX</Text>
          <Button colorScheme="blue" size="lg" width="100%" marginTop="10px">
            Proceed to Checkout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ShoppingCart;