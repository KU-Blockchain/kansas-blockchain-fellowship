import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";
import logo from "../images/logo.png";

function Welcome() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgGradient="linear(to-r, teal.500, blue.400)"
      borderRadius="lg"
      m={2}
      p={4}
      minHeight="40vh"
    >
      <VStack spacing={4} align="start" w="70%">
        <Text fontSize="xxxxl" mt={5} fontWeight="bold" color="white">
          The Kansas Blockchain Fellowship
        </Text>
        <Text fontSize="lg" color="white">
          A seven-week, experiential learning intensive, scholarship program,
          and talent incubator to prepare students in Kansas for careers in
          blockchain and web3.
        </Text>
      </VStack>

      <Box w="30%">
        <Image src={logo} borderRadius="lg" boxSize="100%" objectFit="cover" />
      </Box>
    </Box>
  );
}

export default Welcome;
