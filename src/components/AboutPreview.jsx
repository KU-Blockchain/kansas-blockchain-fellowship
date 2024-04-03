import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

function AboutPreview() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        Education, Mentorship, & Professional Development
      </Text>
      <Text mt={3} mx={8}>
        This program is designed to give exceptional students in the Midwest
        deep knowledge and experience around blockchain, digital assets, and
        web3 to prepare them for careers in the industry.
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
