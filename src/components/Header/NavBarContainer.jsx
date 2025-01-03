import React from "react";
import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      mb={8}
      p={6}
      bg="white"
      color={["white", "white", "primary.700", "primary.700"]}
      borderRadius="full"
      boxShadow="md"
      marginX="auto"
      maxWidth="90%"
      marginTop={4}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;