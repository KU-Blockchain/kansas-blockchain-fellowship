import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Person from "./Person"; // Make sure this import path is correct
import emma_headshot from "../images/team_headshots/emma.jpeg";
import yash_headshot from "../images/team_headshots/yash.jpeg";
import jahnvi_headshot from "../images/team_headshots/jahnvi.jpeg";

const Team = () => {
  // Placeholder data for demonstration
  const teamMembers = [
    {
      headshot: emma_headshot,
      title: "Program Director",
      name: "Emma",
      bio: "Emma is a final year Honors Computer Science and Visual Arts student. She is President of the KU Blockchain Institute.",
    },
    {
      headshot: jahnvi_headshot,
      name: "Jahnvi",
      title: "Director of Education",
      bio: "Jahnvi is a sophomore in the Honors Program studying Computer Science. She is Director of Communications for the KU Blockchain Institute.",
    },
    {
      headshot: yash_headshot,
      name: "Yash",
      title: "Head of Partnerships",
      bio: "Yash is a sophomore in the Honors Program studying Applied Computing and Mathematics. He is the VP of Finance for the KU Blockchain Institute.",
    },
  ];

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        Our Team
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {teamMembers.map((member, index) => (
          <Person
            key={index}
            headshot={member.headshot}
            name={member.name}
            title={member.title}
            bio={member.bio}
            moreImages={member.moreImages}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Team;
