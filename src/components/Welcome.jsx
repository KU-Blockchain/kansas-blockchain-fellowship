import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";
import logo from "../images/logo.png"; // Replace with the correct path to your image

function Welcome() {
  return (
    <Box
      display={{ base: "block", md: "flex" }} // Switches to block layout on base, flex on medium screens and up
      justifyContent="space-between"
      alignItems="center"
      bgGradient="linear(to-r, teal.200, blue.400)"
      borderRadius="lg"
      m={{ base: 4, md: 12 }} // Less margin on smaller screens
      p={4}
      minHeight="40vh"
      borderWidth="5px"
      borderColor="purple.500"
    >
      <VStack spacing={4} align="start" w={{ base: "100%", md: "70%" }}>
        <Text
          fontSize={{ base: "xl", md: "xxxxl" }}
          mt={5}
          fontWeight="bold"
          color="black"
        >
          The Kansas Blockchain Fellowship
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="black">
          A seven-week, experiential learning intensive, scholarship program,
          and talent incubator to prepare students in Kansas for careers in
          blockchain and web3.
        </Text>
      </VStack>

      <Box w={{ base: "100%", md: "30%" }} mt={{ base: 4, md: 0 }}>
        <Image src={logo} borderRadius="lg" boxSize="100%" objectFit="cover" />
      </Box>
    </Box>
  );
}

export default Welcome;
