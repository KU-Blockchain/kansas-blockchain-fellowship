import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import TeamMember from "./TeamMember"; // Make sure this import path is correct
import emma_headshot from "../images/team_headshots/emma.jpeg";
import yash_headshot from "../images/team_headshots/yash.jpeg";
import jahnvi_headshot from "../images/team_headshots/jahnvi.jpeg";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null); // State to track the selected team member
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const teamMembers = [
    {
      headshot: emma_headshot,
      title: "Program Director",
      name: "Emma",
      bio: "Emma is a final year Honors Computer Science and Visual Arts student. She is President of the KU Blockchain Institute.",
      longBio:
        "Emma is a final year Honors Computer Science and Visual Arts student. She is President of the KU Blockchain Institute.",
    },
    {
      headshot: jahnvi_headshot,
      name: "Jahnvi",
      title: "Director of Education",
      bio: "Jahnvi is a sophomore in the Honors Program studying Computer Science. She is Director of Communications for the KU Blockchain Institute.",
      longBio:
        "Jahnvi is a sophomore in the Honors Program studying Computer Science. She is Director of Communications for the KU Blockchain Institute.",
    },
    {
      headshot: yash_headshot,
      name: "Yash",
      title: "Head of Partnerships",
      bio: "Yash is a sophomore in the Honors Program studying Applied Computing and Mathematics. He is the VP of Finance for the KU Blockchain Institute.",
      longBio:
        "Yash is a sophomore in the Honors Program studying Applied Computing and Mathematics. He is the VP of Finance for the KU Blockchain Institute.",
    },
  ];
  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        Our Team
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {teamMembers.map((member, index) => (
          <Box key={index} onClick={() => openModal(member)} cursor="pointer">
            <TeamMember
              headshot={member.headshot}
              name={member.name}
              title={member.title}
              bio={member.bio}
              moreImages={member.moreImages}
            />
          </Box>
        ))}
      </SimpleGrid>
      {selectedMember && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size="full"
        >
          <ModalOverlay />
          <ModalContent m={20} borderRadius="2xl">
            <ModalHeader textAlign="center">{selectedMember.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Image
                  src={selectedMember.headshot}
                  boxSize="300px"
                  borderRadius="full"
                />
                <Text fontSize="xl" fontWeight="bold">
                  {selectedMember.title}
                </Text>
                <Text fontSize="md">{selectedMember.longBio}</Text>
                {/* Include moreImages or any additional details here */}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Team;
