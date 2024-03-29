import React from "react";
import { Box, Text, Link, Image } from "@chakra-ui/react";

function About() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5}>
        The Kansas Blockchain Fellowship
      </Text>
      <Text mt={3}>
        a seven-week, experiential learning intensive, scholarship program, and
        talent incubator to prepare students in Kansas for careers in blockchain
        and web3.{" "}
      </Text>
      <Link href="https://chakra-ui.com" isExternal color="teal.500" mt={4}>
        From the University of Kansas Blockchain Institute
      </Link>
    </Box>
  );
}

export default About;
