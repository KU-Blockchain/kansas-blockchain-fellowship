import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import pinataLogo from "../images/logos/big_pinata.png"; // Path to the Pinata logo image
import rippleLogo from "../images/logos/big_ripple.png"; // Path to the Rippled logo image
import a16zLogo from "../images/logos/a16z.jpg"; // Path to the a16z logo image

const Sponsors = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="3xl" textAlign="center" my={5}>
        Our Sponsors
      </Heading>
      <Text
        fontSize="lg"
        color="gray.400"
        textAlign="center"
        px="5vw"
        mb="40px"
      >
        The Kansas Blockchain Fellowship is made possible by the generous
        support from our sponsors below. These sponsors helped fund scholarships
        for each student and cover the program costs to ensure the program is
        accessible to all students.
      </Text>

      <Flex direction="column" align="center" justify="center">
        <Box mb={10}>
          <Heading size="xl" mb={4} textAlign="center">
            Platinum Sponsor
          </Heading>
          <Image src={pinataLogo} alt="Pinata Logo" maxH="300px" m="auto" />
        </Box>

        <Box mb={10}>
          <Heading size="xl" mb={4} textAlign="center">
            Silver Tier Sponsor
          </Heading>
          <Image src={rippleLogo} alt="Ripple Logo" maxH="250px" m="auto" />
        </Box>

        <Box mb={10}>
          <Heading size="lg" mb={4} textAlign="center">
            Educational Sponsor
          </Heading>
          <Image src={a16zLogo} alt="a16z Logo" maxH="200px" m="auto" />
        </Box>
        <Text
          fontSize="md"
          color="gray.400"
          textAlign="center"
          px="15vw"
          mb="30px"
        >
          a16z generously donated 30 copies of Chris Dixon's{" "}
          <i>Read Write Own</i>, so that each Fellow and Mentor was gifted a
          copy as supplemental reading.
        </Text>
      </Flex>
    </Box>
  );
};

export default Sponsors;
