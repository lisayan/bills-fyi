import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import BillPillContainer from './BillPillContainer.jsx';
import { billPillContainerRow } from '../../styles/billpillcontainerrow.css';

export default function BillPillContainerRow() {
  return (
    <div className='billPillContainerRow'>
      <Box p={4}>
        <Text fontSize="lg" fontWeight="bold" marginBottom="10px">Medical Bill Amounts</Text>
        <Stack
          spacing={4}
          align="flex-start"
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Link to="/addbillpage">
            <Button
              borderRadius="20px"
              variant="outline"
              borderStyle="dashed"
              borderColor="blue"
              textColor="blue"
              p={3}
              px={5}
              width="200px"
              height="110px"
            >+ Add Your Bill</Button>
          </Link>
          <BillPillContainer
            label="Shields MRI"
            value={50}
            city="Boston"
            state="MA"
          />
          <BillPillContainer
            label="Beth Israel Hospital"
            value={500}
            city="Boston"
            state="MA"
          />
          <BillPillContainer
            label="Mass Gen Hospital"
            value={200}
            city="Boston"
            state="MA"
          />
          <BillPillContainer
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

