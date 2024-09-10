import React from 'react'
import { Stack, Button, Box, Text } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

export default function MenuLinks({ isOpen, onSignUpClick }) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">
          <Text fontSize="sm" fontWeight="normal">Home</Text>
        </MenuItem>
        <MenuItem to="/about">
          <Text fontSize="sm" fontWeight="normal">About us</Text>
        </MenuItem>
        <MenuItem>
          <Button
            size="sm"
            rounded="md"
            color="black"
            fontWeight="bold"
            bg="transparent"
            _hover={{
              bg: "whiteAlpha.300"
            }}
          >
            Login
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            size="sm"
            rounded="md"
            color="white"
            bg="orange.400"
            _hover={{
              bg: "orange.500"
            }}
            onClick={(e) => {
              e.preventDefault();
              onSignUpClick();
            }}
          >
            Sign Up
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  )
}