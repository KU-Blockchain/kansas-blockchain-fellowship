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
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Mentor from "./Mentor";
import joe_headshot from "../images/mentor_headshots/joe_roets.png";
import daniel_headshot from "../images/mentor_headshots/daniel_jones.jpeg";
import perry_headshot from "../images/mentor_headshots/perry_alexander.jpeg";
import i2s from "../images/logos/i2s.png";
import dragonChain from "../images/logos/dragonchain.png";
import sams_club from "../images/logos/sams_club.png";
import disney from "../images/logos/disney.png";
import uniswp from "../images/logos/uniswap.png";
import pinata from "../images/logos/pinata.png";

const Mentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const mentors = [
    {
      headshot: joe_headshot,
      title: "Chief Architect & Founder Dragonchain",
      name: "Joe Roets",
      company_logo: dragonChain,
      bio: "Joe is the Founder and Chief Executive Officer of Dragonchain. He has over 20 years of experience in software architecture focusing on security and scalability. He has created and led multiple technology startups since the mid 1990s. He is a visionary and thought leader in blockchain technology having led or contributed to projects in the space since 2010 at companies such as Overstock, Coinbase, Symbiont, & the Walt Disney Company.",
      moreImages: [disney],
    },
    {
      headshot: daniel_headshot,
      name: "Daniel Jones",
      title: "Sr. Manager, Product Lifecycle Management",
      company_logo: sams_club,
      bio: "Daniel is a tech-enabled young professional who is passionate about challenging the status quo and driving forward a positive disruption. He enjoys building communities around common interests, educating and learning about emerging technologies, and engaging with new opportunities all the time.",
      moreImages: [sams_club],
    },
    {
      headshot: perry_headshot,
      name: "Dr. Perry Alexander",
      title: "Distinguished Professor at The University of Kansas",
      company_logo: i2s,
      bio: "AT&T Foundation Distinguished Professor and ITTC Director at The University of Kansas. Research and teaching interests include formal methods, remote attestation, program verification and synthesis, and languages. Currenting working on frameworks for establishing trust in remote systems. Still looking for my turntable remote.",
    },
  ];

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        Mentors
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {mentors.map((mentor, index) => (
          <Box
            key={index}
            onClick={() => handleMentorClick(mentor)}
            cursor="pointer"
          >
            <Mentor
              headshot={mentor.headshot}
              company_logo={mentor.company_logo}
              name={mentor.name}
              title={mentor.title}
              bio={mentor.bio}
              moreImages={mentor.moreImages}
            />
          </Box>
        ))}
      </SimpleGrid>

      {selectedMentor && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent m={2} borderRadius="xl">
            <ModalHeader textAlign="center">{selectedMentor.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4} align="center">
                <Image
                  src={selectedMentor.headshot}
                  borderRadius="full"
                  boxSize="150px"
                />
                <Text fontSize="2xl" fontWeight="bold">
                  {selectedMentor.title}
                </Text>

                {selectedMentor.moreImages &&
                  selectedMentor.moreImages.length > 0 && (
                    <>
                      <Text fontSize="sm" textAlign="center">
                        with experience from
                      </Text>
                      <SimpleGrid
                        columns={selectedMentor.moreImages.length}
                        spacing={5}
                        mt={4}
                      >
                        {selectedMentor.moreImages.map((image, index) => (
                          <Box
                            key={index}
                            width="100px"
                            height="auto"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Image
                              src={image}
                              width="100%"
                              height="auto"
                              objectFit="contain"
                            />
                          </Box>
                        ))}
                      </SimpleGrid>
                    </>
                  )}
                <Text fontSize="md" textAlign="center">
                  {selectedMentor.bio}
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Mentors;
