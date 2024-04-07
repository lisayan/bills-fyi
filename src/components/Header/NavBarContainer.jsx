import React from 'react'
import { Divider, Flex } from "@chakra-ui/react"

export default function NavBarContainer({ children, ...props }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "primary.100"]}
      color={["white", "white", "primary.700", "white"]}
      // {...props}
    >
      {children}
  </Flex>
  )
}