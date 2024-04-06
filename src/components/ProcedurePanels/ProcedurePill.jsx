import React from 'react';
import { Box, Icon, Image, Text } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi'; // Importing the location icon
import { Link } from "react-router-dom";
import {procedureCard, procedureCardInner, procedureIcon } from '../../styles/procedurepanels.css';

export default function ProcedurePill({ link, image, procedure }) {
  return (
    <div className="procedureCard">
        <Link to={link}>
          <Box
            bg="#daf0ee"
            textAlign="left"
            display="inline-block"
            width="162px"
            height="122px"
            position="relative"
            borderRadius="3px"
            padding="12px"
          >
            <div className="procedureCardInner">
              <Image src={image} alt="mri" width="56px" height="56px"/>
              <Text marginTop="10px">{procedure}</Text>
            </div>
          </Box>
        </Link>
    </div>
  )
};