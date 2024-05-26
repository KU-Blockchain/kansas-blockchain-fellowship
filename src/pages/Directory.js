import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import Mentor from "../components/After_auth/Mentor";

import joe_headshot from "../images/mentor_headshots/joe_roets.jpeg";
import daniel_headshot from "../images/mentor_headshots/daniel_jones.jpeg";
import perry_headshot from "../images/mentor_headshots/perry_alexander.jpeg";
import kevin_headshot from "../images/mentor_headshots/kevin_galler.jpeg";
import jennifer_headshot from "../images/mentor_headshots/jennifer_lohoefener.jpeg";
import thea_headshot from "../images/mentor_headshots/thea_neal.jpeg";
import austin_headshot from "../images/mentor_headshots/austin_adams.jpeg";
import thomas_headshot from "../images/mentor_headshots/thomas_flynn.jpeg";
import paige_headshot from "../images/mentor_headshots/paige_jones.jpeg";
import samantha_headshot from "../images/mentor_headshots/samantha_mitra.jpeg";
import nathan_headshot from "../images/mentor_headshots/nathan_schwermann.jpeg";

import i2s from "../images/logos/i2s.png";
import dragonChain from "../images/logos/dragonchain.png";
import sams_club from "../images/logos/sams_club.png";
import disney from "../images/logos/disney.png";
import uniswap from "../images/logos/uniswap.png";
import pinata from "../images/logos/pinata.png";
import apple from "../images/logos/apple.png";
import monad from "../images/logos/monad.jpeg";
import coinbase from "../images/logos/coinbase.png";
import apex_fusion from "../images/logos/apex_fusion.jpeg";
import iohk from "../images/logos/iohk.jpeg";
import solana from "../images/logos/solana.png";
import spheron from "../images/logos/spheron_network.jpeg";
import ebisu_bay from "../images/logos/ebisu_bay.png";

const mentors = [
  {
    headshot: austin_headshot,
    title: "Research at Uniswap",
    name: "Austin Adams",
    company_logo: uniswap,
    shortBio:
      "Austin studied Mathematics and Economics at the University of Kansas. He has worked in research at Uniswap since 2022.",
    linkedin: "https://www.linkedin.com/in/austin-adams/",
    howToContact: "Paige prefers to be contacted via Telegram or email",
    otherLinks: [
      { title: "Personal Website", url: "https://austin-website.com" },
      { title: "GitHub", url: "https://github.com/austin" },
    ],
  },
  {
    headshot: paige_headshot,
    title: "Software Engineer at Piñata",
    name: "Paige Jones",
    company_logo: pinata,
    shortBio:
      "Paige is a builder and a maker. She loves developing web3 applications that solve real world problems by providing thoughtful and creative solutions. She is a KU Alumna.",
    linkedin: "https://www.linkedin.com/in/paige-jones/",
    howToContact: "Paige prefers to be contacted via Telegram or email",
    otherLinks: [
      { title: "Personal Blog", url: "https://paige-blog.com" },
      { title: "Twitter", url: "https://twitter.com/paige" },
    ],
  },
];

function Directory() {
  return (
    <Box textAlign="center" py={10} px={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={10}>
        Directory
      </Text>
      <VStack spacing={5} align="stretch">
        {mentors.map((mentor, index) => (
          <Mentor
            key={index}
            headshot={mentor.headshot}
            name={mentor.name}
            company_logo={mentor.company_logo}
            title={mentor.title}
            shortBio={mentor.shortBio}
            linkedin={mentor.linkedin}
            otherLinks={mentor.otherLinks}
            howToContact={mentor.howToContact}
          />
        ))}
      </VStack>
    </Box>
  );
}

export default Directory;
