import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

function AboutPreview() {
  return (
    <Box textAlign="center" py={10}>
      <Text textColor="gray" mt={3} mx={8}>
        opportunities for
      </Text>
      <Text fontSize={{ base: "lg", md: "xl" }} mt={5} fontWeight="bold" mx={6}>
        Education, Mentorship, & Professional Development
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} mt={3} mx={8} textColor="gray.400">
        This program is designed to give exceptional students in the Midwest
        deep knowledge and experience around blockchain, digital assets, and
        web3 to prepare them for careers in the industry.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} textColor="gray.400" mx={17} mt={"30px"}>
        The Fellowship will consist of weekly classes running from June 13 -
        July 25 with a final project showcase on Friday, July 26.
      </Text>
      <Link
        href="https://kublockchain.com/"
        isExternal
        color="orange.500"
        fontSize={{ base: "md", md: "lg" }}
        mt={4}
        mx={4}
      >
        From the University of Kansas Blockchain Institute
      </Link>
    </Box>
  );
}

export default AboutPreview;
