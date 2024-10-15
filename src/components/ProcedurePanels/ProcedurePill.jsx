import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, VStack } from '@chakra-ui/react';

export default function ProcedurePill({ link, procedure, price }) {
  return (
    <Link to={link}>
      <Box
        width="200px"
        height="240px"
        borderRadius="16px"
        overflow="hidden"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        border="1px solid #e0e0e0"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="white"
        _hover={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)" }}
      >
        <VStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center" px={4} color="var(--color-primary)">
            {procedure}
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="var(--color-secondary)">
            ${price}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}
