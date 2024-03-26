import React from 'react';
import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Icon } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi'; // Importing the location icon

const BillPill = ({ label, value, city, state }) => {
  return (
    <Box
      bg="gray.200"
      borderRadius="20px"
      p={3}
      px={5}
      textAlign="left"
      boxShadow="md"
      display="inline-block"
      width="200px"
    >
      <Stat>
        <StatLabel color="gray.500">{label}</StatLabel>
        <StatNumber>${value}</StatNumber>
        <StatHelpText color="gray.500">
          <Icon as={FiMapPin} color="gray.500" mr={1} />
          {city}, {state}
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default BillPill;