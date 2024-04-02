import React from "react";
import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import learning from "../images/learning.jpeg";

function Sponsorships() {
  return (
    <Flex height="100vh" align="center" justify="center">
      <Box width="50%" height="50%">
        <Image
          src={learning} // Replace with the path to your image
          alt="Sponsorships"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <Flex width="50%" height="50%" direction="column" paddingLeft="5">
        <Heading as="h1" size="xl">
          Sponsorships
        </Heading>
        <Text fontSize="lg" mt="3">
          Explore sponsorship opportunities and become a partner.
        </Text>
        {/* You can add more text or elements here as needed */}
      </Flex>
    </Flex>
  );
}

export default Sponsorships;
