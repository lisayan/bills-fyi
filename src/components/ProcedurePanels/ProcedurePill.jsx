import React from 'react';
import { Box, Text, VStack, Flex, Circle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledCard = styled(Box)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const StyledText = styled(Text)`
  color: black;
  font-weight: bold;
`;

const PriceBar = styled(Flex)`
  background-color: var(--color-primary);
  color: white;
  font-size: 0.9em;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 0;
`;

export default function ProcedurePill({ link, image, procedure, price }) {
  return (
    <Link to={link}>
      <StyledCard width="200px" height="240px">
        <VStack spacing={0} height="100%">
          <Box
            width="100%"
            height="140px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="white"
          >
            <Circle size="80px" bg="var(--color-secondary)">
              <Box
                as="img"
                src={image}
                alt={procedure}
                width="35px"
                height="35px"
                objectFit="contain"
                filter="brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)"
              />
            </Circle>
          </Box>
          <Divider />
          <VStack spacing={2} flex={1} width="100%" backgroundColor="white">
            <StyledText 
              textAlign="center" 
              fontWeight="bold"
              fontSize="sm"
              noOfLines={2}
              px={4}
              flex={1}
            >
              {procedure}
            </StyledText>
            <PriceBar><strong>${price}</strong></PriceBar>
          </VStack>
        </VStack>
      </StyledCard>
    </Link>
  );
}