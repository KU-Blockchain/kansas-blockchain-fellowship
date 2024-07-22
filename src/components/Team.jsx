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
import micah_headshot from "../images/team_headshots/micah.jpg";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null); // State to track the selected team member
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const teamMembers = [
    {
      headshot: emma_headshot,
      title: "Program Director",
      name: "Emma Nasseri",
      bio: "Emma is a final year Honors Computer Science and Visual Arts student. She was the previous President of the KU Blockchain Institute.",
      longBio:
        "Emma is a final year Honors Computer Science and Visual Arts student. She was the previous President of the KU Blockchain Institute.",
    },
    {
      headshot: jahnvi_headshot,
      name: "Jahnvi Maddila",
      title: "Vice Director",
      bio: "Jahnvi is a junior in the Honors Program studying Computer Science. She is the VP of Engineering for the KU Blockchain Institute.",
      longBio:
        "Jahnvi is a junior in the Honors Program studying Computer Science. She is the VP of Engineering for the KU Blockchain Institute.",
    },
    {
      headshot: yash_headshot,
      name: "Yash Prajapati",
      title: "Head of Partnerships",
      bio: "Yash is a junior in the Honors Program studying Applied Computing and Mathematics. He is the VP of Finance for the KU Blockchain Institute.",
      longBio:
        "Yash is a junior in the Honors Program studying Applied Computing and Mathematics. He is the VP of Finance for the KU Blockchain Institute.",
    },
    {
      headshot: micah_headshot,
      name: "Micah Borghese",
      title: "Diector of Education",
      bio: "Micah is a senior in the Honors Program studying Computer Science and Mathematics. He is the President for the KU Blockchain Institute.",
      longBio:
        "Micah is a senior in the Honors Program studying Computer Science and Mathematics. He is the President for the KU Blockchain Institute.",
    },
  ];
  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <Box px={5}>
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
          size="3xl"
        >
          <ModalOverlay />
          <ModalContent m={2} borderRadius="xl">
            <ModalHeader textAlign="center">{selectedMember.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4} align="center">
                <Image
                  src={selectedMember.headshot}
                  width="200px"
                  borderRadius="full"
                />
                <Text fontSize="2xl" fontWeight="bold">
                  {selectedMember.title}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {selectedMember.longBio}
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Team;
