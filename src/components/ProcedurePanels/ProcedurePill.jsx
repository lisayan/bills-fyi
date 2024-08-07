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
            bg="#E0E1DD"
            textAlign="left"
            display="inline-block"
            width="170px"
            height="130px"
            position="relative"
            borderRadius="20px"
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