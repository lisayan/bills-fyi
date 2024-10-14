import React from "react"
import { Box, Text, Flex } from "@chakra-ui/react"
import logo from '../../images/logo_white.png'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Flex alignItems="center">
        <Flex
          width="40px"
          height="40px"
          bg="var(--color-primary)"
          borderRadius="md"
          justifyContent="center"
          alignItems="center"
          mr={2}
        >
          <img src={logo} alt="logo" style={{ width: '20px', height: '20px' }} />
        </Flex>
        <Text fontSize="lg" fontWeight="bold">
          Ozzi Health
        </Text>
      </Flex>
    </Box>
  )
}