import React from 'react'
import { Stack, Button, Box } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

export default function MenuLinks({ isOpen }) {
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
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About us </MenuItem>
          <MenuItem to="/add-bills">
            <Button
              size="sm"
              rounded="xl"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.100", "primary.100"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
              }}
              variant={'outline'}
            >
              Sign Up
            </Button>
          </MenuItem>
          <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="xl"
              color={["primary.500", "primary.500", "white", "primary.100"]}
              bg={["white", "white", "primary.100", "white"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
              }}
              variant={'solid'}
            >
              Sign In
            </Button>
          </MenuItem>
        </Stack>
      </Box>
  )
}