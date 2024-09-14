import React from 'react';
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledBox = styled(Box)`
  background-color: var(--color-tertiary);
`;

const StyledText = styled(Text)`
  color: var(--color-quaternary);
  font-weight: bold;
`;

export default function ProcedurePill({ link, image, procedure }) {
  return (
    <Link to={link}>
      <VStack spacing={4} width="200px" height="240px" justify="flex-start">
        <StyledBox
          borderRadius="full"
          width="140px"
          height="140px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            as="img"
            src={image}
            alt={procedure}
            width="70px"
            height="70px"
            filter="brightness(0) invert(1)"
          />
        </StyledBox>
        <StyledText 
          textAlign="center" 
          fontWeight="bold"
          fontSize="md"
          noOfLines={2}
        >
          {procedure}
        </StyledText>
      </VStack>
    </Link>
  );
}