import React from "react";
import { Text, Heading, Box, Image, Flex } from "@chakra-ui/react";
import KBFTeamPic from "../images/team_headshots/KBFTeam.jpg";

const KBFTeam = () => {
  return (
    <Flex
      direction="column" // Stack children vertically
      align="center" // Center-align children horizontally
      width="100%" // Full width to the Flex container
    >
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        Our Team
      </Heading>

      <Box
        px="10%" // 10% padding on each side
        width="80%" // Take 80% width to allow for 10% padding on each side
      >
        <Image
          src={KBFTeamPic}
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

export default KBFTeam;
