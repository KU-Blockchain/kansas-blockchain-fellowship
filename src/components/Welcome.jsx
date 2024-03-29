import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";
import logo from "../images/logo.png";

function Welcome() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgGradient="linear(to-r, teal.300, blue.500)"
      borderRadius="lg"
      m={2}
      p={4}
      minHeight="40vh"
    >
      <VStack spacing={4} align="start" w="50%">
        <Text fontSize="2xl" color="whiteAlpha.900">
          Welcome to Our Application
        </Text>
        <Text fontSize="lg" color="white">
          Get started by exploring features.
        </Text>
      </VStack>

      <Box w="50%">
        <Image src={logo} borderRadius="lg" boxSize="100%" objectFit="cover" />
      </Box>
    </Box>
  );
}

export default Welcome;
