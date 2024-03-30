import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

function About() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        Education, Mentorship, & Professional Development
      </Text>
      <Text mt={3} mx={8}>
        a seven-week, experiential learning intensive, scholarship program, and
        talent incubator to prepare students in Kansas for careers in blockchain
        and web3.{" "}
      </Text>
      <Link
        href="https://kublockchain.com/"
        isExternal
        color="teal.500"
        fontSize="md"
        mt={4}
        mx={4} // Add the same margin to the Link if desired
      >
        From the University of Kansas Blockchain Institute
      </Link>
    </Box>
  );
}

export default About;
