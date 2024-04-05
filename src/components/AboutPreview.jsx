import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

function AboutPreview() {
  return (
    <Box textAlign="center" py={10}>
      <Text textColor="gray" mt={3} mx={8}>
        opportunities for
      </Text>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        Education, Mentorship, & Professional Development
      </Text>
      <Text mt={3} mx={8} textColor="gray.300">
        This program is designed to give exceptional students in the Midwest
        deep knowledge and experience around blockchain, digital assets, and
        web3 to prepare them for careers in the industry.
      </Text>
      <Text textColor="gray.400" mr={"15vh"} ml={"15vh"} mt={"30px"}>
        The Fellowship will consist of weekly classes running from June 11 -
        July 23 with a final project showcase on Friday, July 26.
      </Text>
      <Link
        href="https://kublockchain.com/"
        isExternal
        color="orange.500"
        fontSize="lg"
        mt={4}
        mx={4}
      >
        From the University of Kansas Blockchain Institute
      </Link>
    </Box>
  );
}

export default AboutPreview;
