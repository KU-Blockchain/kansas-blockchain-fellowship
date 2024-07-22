import React from "react";
import { Text, Heading, Box, Image, Flex } from "@chakra-ui/react";
import cohort1 from "../images/fellow_headshots/cohort1.jpg";

const Cohort1 = () => {
  return (
    <Flex
      direction="column" // Stack children vertically
      align="center" // Center-align children horizontally
      width="100%" // Full width to the Flex container
    >
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        Cohort One
      </Heading>

      <Box
        px="10%" // 10% padding on each side
        width="80%" // Take 80% width to allow for 10% padding on each side
      >
        <Image
          src={cohort1}
          alt="Cohort 1"
          objectFit="cover"
          borderRadius="xl"
          border="2px"
          borderColor="black"
          width="100%" // Ensures the image is responsive and fills the Box
        />
      </Box>
    </Flex>
  );
};

export default Cohort1;
