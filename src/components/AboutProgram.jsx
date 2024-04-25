import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

function AboutProgram() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        About the Program
      </Text>
      <Text textColor="gray.400" mr={"15vh"} ml={"15vh"}>
        This program is designed to give exceptional students in the Midwest
        deep knowledge and experience around blockchain, digital assets, and
        web3 to prepare them for careers in the industry. It is a professional
        experience designed to either accompany or replace a traditional summer
        internship.
      </Text>
      <Text textColor="gray.400" mr={"15vh"} ml={"15vh"} mt={"30px"}>
        The Fellowship will consist of weekly classes running from June 13 -
        July 25 with a final project showcase on Friday, July 26.
      </Text>
      <Text textColor="gray.400" mr={"15vh"} ml={"15vh"} mt={"30px"}></Text>
    </Box>
  );
}

export default AboutProgram;
