import React from "react";
import { Box, Flex, Text, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  const linkStyle = {
    marginRight: "5",
    padding: "8px 16px",
    borderRadius: "md",
    border: "2px solid white",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    _hover: {
      textDecoration: "none",
      backgroundColor: "white",
      color: "purple.600",
    },
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bgGradient="linear(to-r, purple.500, blue.500)"
      color="white"
    >
      <Flex align="center">
        <ChakraLink as={Link} to="/" display="flex" alignItems="center">
          <Image
            src={logo}
            boxSize="50px" // Set the size of your logo
            marginRight="12px"
          />
        </ChakraLink>
        <Text fontSize="lg" fontWeight="bold">
          The Kansas Blockchain Fellowship
        </Text>
      </Flex>
      <Box display="flex" alignItems="center">
        <ChakraLink as={Link} to="/about" sx={linkStyle}>
          About
        </ChakraLink>
        <ChakraLink as={Link} to="/sponsorships" sx={linkStyle}>
          Sponsorships
        </ChakraLink>
        <ChakraLink as={Link} to="/applications" sx={linkStyle}>
          Applications
        </ChakraLink>
        {/* Add more navigation links as needed */}
      </Box>
    </Flex>
  );
}

export default Navbar;
