import React from "react"
import { Box, Text } from "@chakra-ui/react"
import logo from '../../images/logo_white.png'
import '../../styles/logo.css';

export default function Logo(props) {
  return (
    <Box {...props} display="flex" alignItems="center">
      <img src={logo} alt="logo" className="logoContainer" />
      <Text fontSize="xl" fontWeight="bold" ml="2">
        bills.exposed
      </Text>
    </Box>
  )
}