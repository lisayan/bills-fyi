import React from 'react';
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProcedurePill({ link, image, procedure }) {
  return (
    <Link to={link}>
      <VStack spacing={3} width="150px" height="180px" justify="flex-start">
        <Box
          bg="orange.400"
          borderRadius="full"
          width="100px"
          height="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            as="img"
            src={image}
            alt={procedure}
            width="50px"
            height="50px"
            filter="brightness(0) invert(1)"
          />
        </Box>
        <Text 
          textAlign="center" 
          fontWeight="medium"
          fontSize="sm"
          color="gray.700"
          noOfLines={2}
        >
          {procedure}
        </Text>
      </VStack>
    </Link>
  );
}