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
import Fellow from "./Fellow";

import austin_headshot from "../images/mentor_headshots/austin_adams.jpeg";
import suhaan_headshot from "../images/fellow_headshots/suhaan_syed.jpeg";
import shayaan_headshot from "../images/fellow_headshots/shayaan_mohammed.jpg";
import nimra_headshot from "../images/fellow_headshots/nimra_syed.jpg";
import wolfgang_headshot from "../images/fellow_headshots/wolfgang_sell.jpeg";
import teja_headshot from "../images/fellow_headshots/teja_nimmagadda.jpg";
import masen_headshot from "../images/fellow_headshots/masen_adelman.jpeg";
import andrew_headshot from "../images/fellow_headshots/andrew_huang.jpg";
import caleb_headshot from "../images/fellow_headshots/caleb_hite.jpg";
import eli_headshot from "../images/fellow_headshots/eli_chapman.jpeg";
import jay_headshot from "../images/fellow_headshots/jay_patel.jpeg";
import noor_headshot from "../images/fellow_headshots/noor_syed.jpeg";
import shivansh_headshot from "../images/fellow_headshots/shivansh_shrivas.jpeg";
import ramesh_headshot from "../images/fellow_headshots/ramesh_solasa.jpeg";
import rahul_headshot from "../images/fellow_headshots/rahul_desai.jpeg";
import kyle_headshot from "../images/fellow_headshots/kyle_spragg.jpg";
import ellia_headshot from "../images/fellow_headshots/ellia_morse.jpeg";

const Fellows = () => {
  const [selectedFellow, setSelectedFellow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFellowClick = (fellow) => {
    setSelectedFellow(fellow);
    setIsModalOpen(true);
  };

  const fellows = [
    {
      headshot: suhaan_headshot,
      field_of_study:
        "Senior in Computer Science, Math, + Biomedical Engineering",
      name: "Suhaan Syed",
      shortBio:
        "Suhaan Syed is a senior at the University of Kansas, studying Computer Science with minors in Math and Biomedical Engineering. He is from Overland Park, Kansas. Suhaan is part of the University Honors Program and a member of Phi Kappa Phi honor society. He has been recognized as a Kansas Governors Scholar and has received the Wealthy Babcock-Florance Black Mathematics Scholarship and Garmin Excellence Scholarship.",
      bio: "Suhaan Syed is a senior at the University of Kansas, studying Computer Science with minors in Math and Biomedical Engineering. He is from Overland Park, Kansas. Suhaan is part of the University Honors Program and a member of Phi Kappa Phi honor society. He has been recognized as a Kansas Governors Scholar and has received the Wealthy Babcock-Florance Black Mathematics Scholarship and Garmin Excellence Scholarship.",
    },
    {
      headshot: ellia_headshot,
      field_of_study: "Junior in Computer Science",
      name: "Ellia Morse",
      shortBio:
        "Ellia began coding at eight and hasnt stopped since. She is from Topeka, Kansas. Her focus is on using technology to improve accessibility, as she believes that automating repetitive jobs through AI can enable people to focus on work that they find more fulfilling.",
      bio: "Ellia began coding at eight and hasnt stopped since. She is from Topeka, Kansas. Her focus is on using technology to improve accessibility, as she believes that automating repetitive jobs through AI can enable people to focus on work that they find more fulfilling.",
    },
    {
      headshot: shayaan_headshot,
      field_of_study: "Sophomore in Computer Science & Economics",
      name: "Shayaan Mohammed",
      shortBio:
        "Shayaan is currently pursuing a BS in Computer Science and Economics, with additional emphasis on Applied Mathematics, Data Science and Cybersecurity. His future career interests and goals lie in Computational Economics & Financial Engineering. Shayaan is a Fintech enthusiast who believes in the potential of Blockchain and Web3 to revolutionize business and change the way we experience the internet, through decentralization and democratization.",
      bio: "Shayaan is currently pursuing a BS in Computer Science and Economics, with additional emphasis on Applied Mathematics, Data Science and Cybersecurity. His future career interests and goals lie in Computational Economics & Financial Engineering. Shayaan is a Fintech enthusiast who believes in the potential of Blockchain and Web3 to revolutionize business and change the way we experience the internet, through decentralization and democratization.",
    },
    {
      headshot: nimra_headshot,
      field_of_study: "Junior in Computer Science & Biomedical Engineering",
      name: "Nimra Syed",
      shortBio:
        "Nimra Syed is from Overland Park, Kansas. At KU, Nimra has been a part of the SELF Leadership Fellowship program since her freshman year. She has held several leadership roles within SELF, including Project Manager for the Community Service Project (CSP), the co-webmaster to manage the SELF website, and the Logistics Co-Lead for the High School Design (HSD) competition. Nimra is also the Recruitment Chair for the Society of Women Engineers (SWE) organization and member of Upsilon Pi Epsilon(UPE) honors society.",
      bio: "Nimra Syed is from Overland Park, Kansas. At KU, Nimra has been a part of the SELF Leadership Fellowship program since her freshman year. She has held several leadership roles within SELF, including Project Manager for the Community Service Project (CSP), the co-webmaster to manage the SELF website, and the Logistics Co-Lead for the High School Design (HSD) competition. Nimra is also the Recruitment Chair for the Society of Women Engineers (SWE) organization and member of Upsilon Pi Epsilon(UPE) honors society.",
    },
    {
      headshot: wolfgang_headshot,
      field_of_study: "Freshman in Cybersecurity Engineering & Economics",
      name: "Wolfgang Sell",
      shortBio:
        "Wolfgang Sell is a rising freshman planning to attend the University of Kansas for Cybersecurity Engineering and Economics. Hailing from Shawnee, Kansas, he proudly graduated with honors from Shawnee Mission Northwest Highs class of 2024. There, he took on several positions of leadership such as Captain of the SMSD Cyber Competition Team, Principal Violist of the SMNW Chamber Orchestra, and President of the SMNW Chess Club. He is currently an IT Intern at Garmin.",
      bio: "Wolfgang Sell is a rising freshman planning to attend the University of Kansas for Cybersecurity Engineering and Economics. Hailing from Shawnee, Kansas, he proudly graduated with honors from Shawnee Mission Northwest Highs class of 2024. There, he took on several positions of leadership such as Captain of the SMSD Cyber Competition Team, Principal Violist of the SMNW Chamber Orchestra, and President of the SMNW Chess Club. He is currently an IT Intern at Garmin.",
    },
    {
      headshot: teja_headshot,
      field_of_study:
        "Senior in Interdisciplinary Computing + Biology, Biomedical Engineering, + Cybersecurity",
      name: "Teja Nimmagadda",
      shortBio:
        "Teja Nimmagadda is a rising senior at KU majoring in Interdisciplinary Computing Biology Concentration, minoring in Biomedical Engineering with a certificate in Cybersecurity. Her hometown is Overland Park, Kansas. She has always had an interest in healthcare and medicine, which had only intensified after working as a Nurse Aide at a hospital where she explored the ways that technology impacts the quality of care received by a patient.",
      bio: "Teja Nimmagadda is a rising senior at KU majoring in Interdisciplinary Computing Biology Concentration, minoring in Biomedical Engineering with a certificate in Cybersecurity. Her hometown is Overland Park, Kansas. She has always had an interest in healthcare and medicine, which had only intensified after working as a Nurse Aide at a hospital where she explored the ways that technology impacts the quality of care received by a patient.",
    },
    {
      headshot: masen_headshot,
      field_of_study: "Freshman in Computer Science and Economics",
      name: "Masen Adelman",
      shortBio:
        "Masen Adelman recently graduated from Blue Valley Northwest High School in Overland Park, Kansas. He plans to pursue a dual degree in Computer Science and Economics, with particular interests in algorithmic trading, cybersecurity, military applications of machine learning, and potential blockchain innovations.",
      bio: "Masen Adelman recently graduated from Blue Valley Northwest High School in Overland Park, Kansas. He plans to pursue a dual degree in Computer Science and Economics, with particular interests in algorithmic trading, cybersecurity, military applications of machine learning, and potential blockchain innovations.",
    },
    {
      headshot: andrew_headshot,
      field_of_study: "Sophomore in Computer Science & Mathematics",
      name: "Andrew Huang",
      shortBio:
        "Andrew Huang is going into his sophomore year as a student at the University of Kansas, double majoring in Computer Science and Mathematics. He was born and raised in Lawrence, Kansas. This past school year, Andrew has been involved in the Association for Computing Machinery as the Engineering Student Council Representative, and will lead the BugSmashers at ACM this year, giving technical workshops to his peers.",
      bio: "Andrew Huang is going into his sophomore year as a student at the University of Kansas, double majoring in Computer Science and Mathematics. He was born and raised in Lawrence, Kansas. This past school year, Andrew has been involved in the Association for Computing Machinery as the Engineering Student Council Representative, and will lead the BugSmashers at ACM this year, giving technical workshops to his peers.",
    },
    {
      headshot: caleb_headshot,
      field_of_study: "Sophomore in Computer Science",
      name: "Caleb Hite",
      shortBio:
        "Caleb Hite is going into his Sophomore year studying computer science at the University of Kansas. He is from Shawnee, Kansas, and is a member of ACM, Alpha Tau Omega, and German Club at the University of Kansas.",
      bio: "Caleb Hite is going into his Sophomore year studying computer science at the University of Kansas. He is from Shawnee, Kansas, and is a member of ACM, Alpha Tau Omega, and German Club at the University of Kansas.",
    },
    {
      headshot: jay_headshot,
      field_of_study: "Junior in Computer Science",
      name: "Jay Patel",
      shortBio: "Junior in Computer Science",
      bio: "Junior in Computer Science",
    },
    {
      headshot: eli_headshot,
      field_of_study:
        "High School Senior | Founder of Computer Science Honors Society at Washburn Rural High School",
      name: "Eli Chapman",
      shortBio:
        "High School Senior | Founder of Computer Science Honors Society at Washburn Rural High School",

      bio: "High School Senior | Founder of Computer Science Honors Society at Washburn Rural High School",
    },
    {
      headshot: noor_headshot,
      field_of_study: "Final Year Business Analytics Student",
      name: "Noor Syed",
      shortBio: "Final Year Business Analytics Student",
      bio: "Final Year Business Analytics Student",
    },
    {
      headshot: shivansh_headshot,
      field_of_study: "Junior in Computer Engineering & Cybersecurity",
      name: "Shivansh Shrivas",
      shortBio: "Junior in Computer Engineering & Cybersecurity",
      bio: "Junior in Computer Engineering & Cybersecurity",
    },
    {
      headshot: ramesh_headshot,
      field_of_study: "Final Year Graduate Student in Computer Science",
      name: "Ramesh Solasa",
      shortBio: "Final Year Graduate Student in Computer Science",
      bio: "Final Year Graduate Student in Computer Science",
    },
    {
      headshot: rahul_headshot,
      field_of_study: "Senior in Finance",
      name: "Rahul Desai",
      shortBio: "Senior in Finance",
      bio: "Senior in Finance",
    },
    {
      headshot: kyle_headshot,
      field_of_study: "Junior in Computer Science & Business",
      name: "Kyle Spragg",
      shortBio: "Junior in Computer Science & Business",
      bio: "Junior in Computer Science & Business",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5} m="5">
      <Heading as="h2" size="xl" textAlign="center" my={5}>
        2024 Fellows
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {fellows.map((fellow, index) => (
          <Box
            key={index}
            onClick={() => handleFellowClick(fellow)}
            cursor="pointer"
          >
            <Fellow
              headshot={fellow.headshot}
              name={fellow.name}
              field_of_study={fellow.field_of_study}
              shortBio={fellow.shortBio}
              bio={fellow.bio}
              moreImages={fellow.moreImages}
            />
          </Box>
        ))}
      </SimpleGrid>

      {selectedFellow && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent m={2} borderRadius="xl">
            <ModalHeader textAlign="center">{selectedFellow.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4} align="center">
                <Image
                  src={selectedFellow.headshot}
                  borderRadius="full"
                  boxSize="150px"
                />
                <Text fontSize="2xl" fontWeight="bold">
                  {selectedFellow.title}
                </Text>

                {selectedFellow.moreImages &&
                  setSelectedFellow.moreImages.length > 0 && (
                    <>
                      <Text fontSize="sm" textAlign="center">
                        with experience from
                      </Text>
                      <SimpleGrid
                        columns={selectedFellow.moreImages.length}
                        spacing={5}
                        mt={4}
                      >
                        {selectedFellow.moreImages.map((image, index) => (
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
                  {selectedFellow.bio}
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Fellows;