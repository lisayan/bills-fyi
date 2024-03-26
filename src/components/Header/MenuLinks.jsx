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
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/features">Features </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>
          <MenuItem to="/add-bills">
            <Button
              size="sm"
              rounded="xl"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
              }}
              variant={'outline'}
            >
              + Your Bill
            </Button>
          </MenuItem>
          <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="xl"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
              }}
              variant={'outline'}
            >
              Fight Your Bill
            </Button>
          </MenuItem>
        </Stack>
      </Box>
  )
}