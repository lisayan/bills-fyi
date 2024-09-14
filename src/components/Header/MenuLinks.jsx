import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Box, Text, Icon, Tooltip, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import MenuItem from "./MenuItem";

export default function MenuLinks({ isOpen, onSignUpClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleJoinClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          <Text fontSize="med" fontWeight="bold">Home</Text>
        </MenuItem>
        <MenuItem to="/about">
          <Text fontSize="med" fontWeight="bold">About us</Text>
        </MenuItem>
        <Box position="relative">
          <Button
            onClick={handleJoinClick}
            size="med"
            rounded="md"
            color="black"
            fontWeight="bold"
            bg="transparent"
            _hover={{
              bg: "whiteAlpha.300"
            }}
          >
            Join
          </Button>
          {isDropdownOpen && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              zIndex="1"
              bg="white"
              boxShadow="md"
              borderRadius="md"
              p={2}
            >
              <Stack spacing={2}>
                <Button
                  as="a"
                  href="https://discord.gg/DdaNsrVr"
                  target="_blank"
                  color="white"
                  bg="var(--color-secondary)"
                  _hover={{
                    bg: "var(--color-primary)"
                  }}
                  rel="noopener noreferrer"
                  size="sm"
                  width="100%"
                >
                  Discord
                </Button>
                <Button
                  as="a"
                  href="https://www.reddit.com/r/billsexposed/?feed=home"
                  target="_blank"
                  color="white"
                  bg="var(--color-secondary)"
                  _hover={{
                    bg: "var(--color-primary)"
                  }}
                  rel="noopener noreferrer"
                  size="sm"
                  width="100%"
                >
                  Reddit
                </Button>
                <Button
                  size="sm"
                  rounded="md"
                  color="white"
                  bg="var(--color-secondary)"
                  _hover={{
                    bg: "var(--color-primary)"
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    onSignUpClick();
                  }}
                >
                  Email
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
        <MenuItem>
          <Box display="flex" alignItems="center" width="100%">
            <Button
              as={Link}
              to="/cart"
              color="white"
              bg="var(--color-primary)"
              _hover={{
                bg: "var(--color-secondary)"
              }}
              size="sm"
              width="auto"
              leftIcon={<Icon as={FaShoppingCart} />}
              rightIcon={
                <Tooltip 
                  label="Add procedures to your cart to compare prices and plan your visits." 
                  aria-label="Cart information"
                  placement="bottom-end"
                  closeOnClick={false}
                  hasArrow
                >
                  <Box as="span" fontSize="xs" lineHeight="1">
                    <Icon as={FaInfoCircle} boxSize="0.8em" />
                  </Box>
                </Tooltip>
              }
            >
              Cart
            </Button>
          </Box>
        </MenuItem>
      </Stack>
    </Box>
  )
}