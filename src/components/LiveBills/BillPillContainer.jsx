import React from 'react';
import {Box, Stack, Text } from '@chakra-ui/react';
import BillPill from './BillPill';
import { billPillContainer } from '../../styles/billpillcontainer.css';

export default function BillPillContainer() {
    return(
      <div className='billPillContainer'>
        <Box p={4}>
        <Text fontSize="lg" fontWeight="bold" marginBottom="10px">Medical Bill Amounts</Text>
        <Stack 
          spacing={4}
          align="flex-start"
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <BillPill
            label="Shields MRI"
            value={50}
            city="Boston"
            state="MA"
          />
          <BillPill
            label="Beth Israel Hospital"
            value={500}
            city="Boston"
            state="MA"
          />
          <BillPill
            label="Mass Gen Hospital"
            value={200}
            city="Boston"
            state="MA"
          />
          <BillPill
            label="Brigham Women's Hospital"
            value={1500}
            city="Boston"
            state="MA"
          />
        </Stack>
      </Box>
      </div>
    )
}

