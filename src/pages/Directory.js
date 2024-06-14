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
    linkedin: "https://www.linkedin.com/in/paigexx/",
  },
  {
    headshot: thea_headshot,
    title: "Leading Talent Brand at Coinbase",
    name: "Thea Neal",
    company_logo: coinbase,
    linkedin: "https://www.linkedin.com/in/nealthea/",
    shortBio:
      "Thea leads Talent Brand and Events at Coinbase. She has been featured in Forbes 30 under 30.",
    bio: "Thea leads Talent Brand and Events at Coinbase, the most world's most trusted way to join the crypto revolution. She has been featured in Forbes 30 under 30.",
  },
  {
    headshot: kevin_headshot,
    name: "Kevin Galler",
    title: "Developer Relations Engineer at Monad Labs",
    company_logo: monad,
    shortBio:
      "Former Solana Core Developer at Solana Labs. \nFormer Audio Embedded DSP Engineer at Apple.",
    bio: "Former Solana Core Developer at Solana Labs. \nFormer Audio Embedded DSP Engineer (Interactive Media Group) at Apple. \nBS / MS Graduate of Computer Engineering / Electrical and Computer Engineering at Purdue University (Indianapolis Campus) 2013-2017. \nSpecialization in Computer Engineering and Signal Processing (both specialization requirements satisfied).",
    moreImages: [apple, solana],
    linkedin: "https://www.linkedin.com/in/kevingaller/",
  },
  {
    headshot: thomas_headshot,
    title: "Core Contributor at Apex Fusion",
    name: "Tom Flynn",
    company_logo: apex_fusion,
    shortBio:
      "Tom is a core contributor at Apex Fusion, bringing experience from Spheron Network and Input Output (IOHK).",
    bio: "Tom is a core contributor at Apex Fusion. He is the former Head of Business Development U.S. at Spheron Network and Commercial Director at Input Output (IOHK).",
    moreImages: [iohk, spheron],
    linkedin: "https://www.linkedin.com/in/thomas-flynn-4615128/",
  },

  {
    headshot: joe_headshot,
    title: "Chief Architect & Founder of Dragonchain",
    name: "Joe Roets",
    company_logo: dragonChain,
    shortBio:
      "Joe is the Founder and CEO of Dragonchain, who has been a wonderful mentor in the KU Blockchain community.",
    bio: "Joe is the Founder and Chief Executive Officer of Dragonchain. He has over 20 years of experience in software architecture focusing on security and scalability. He has created and led multiple technology startups since the mid 1990s. He is a visionary and thought leader in blockchain technology having led or contributed to projects in the space since 2010 at companies such as Overstock, Coinbase, Lockheed Martin, & the Walt Disney Company.",
    moreImages: [disney],
    linkedin: "https://www.linkedin.com/in/j0j0r0/",
  },
  {
    headshot: samantha_headshot,
    title: "Policy and Legal at Uniswap",
    name: "Samantha Deori-Mitra",
    company_logo: uniswap,
    linkedin: "https://www.linkedin.com/in/samantha-deori-mitra-678b46140/",
    shortBio:
      "Samantha graduated from the University of Kansas in 2020 and her masters degree in public policy from Columbia University.",
    bio: "Samantha graduated from the University of Kansas in 2020. She received her masters degree in public policy from Columbia University in 2022 and has been working in policy and legal at Uniswap since 2022.",
  },

  {
    headshot: daniel_headshot,
    name: "Daniel Jones",
    title: "Sr. Manager, Product Lifecycle Management",
    company_logo: sams_club,
    linkedin: "https://www.linkedin.com/in/danieljonesku/",
    shortBio:
      "Daniel is a tech-enabled young professional who is passionate about challenging the status quo and driving forward a positive disruption.",
    bio: "Daniel is a tech-enabled young professional who is passionate about challenging the status quo and driving forward a positive disruption. He enjoys building communities around common interests, educating and learning about emerging technologies, and engaging with new opportunities all the time.",
  },
  {
    headshot: nathan_headshot,
    name: "Nathan Schwermann",
    title: "Founder & CEO of Ebisu`s Bay",
    company_logo: ebisu_bay,
    linkedin: "https://www.linkedin.com/in/nathanschwermann/",
    shortBio:
      "Nathan founded and built one of the most groundbreaking GameFi platforms ever built. He is KU Alumni.",
    bio: "Nathan founded and built one of the most ground breaking GameFi platforms ever built. He is KU Alumni.",
  },
  {
    headshot: jennifer_headshot,
    title: "Associate Director & Assistant Research Professor at I2S",
    name: "Dr. Jennifer Lohoefener",
    company_logo: i2s,
    linkedin: "https://www.linkedin.com/in/jennifer-lohoefener-a73a9845/",
    shortBio:
      "Dr. Lohoefener is KU Blockchain Institute's faculty advisor and a long-time supporter of blockchain research at the University of Kansas.",
    bio: "Dr. Lohoefener is KU Blockchain Institute's advisor and a long-time supporter of blockchain research at the University of Kansas. She brings experience from both academia and industry, including work at Ad Astra and Mylo.",
  },
];

function Directory() {
  return (
    <Box textAlign="center" py={10} px={5}>
      <Text fontSize="xxxl" fontWeight="bold" mb={10}>
        Directory
      </Text>
      <Text fontSize="md" fontWeight="bold" mb={10}>
        Here you can find a list of mentors who are supporting the program this
        summer. Feel free to reach out to them for advice, guidance, or just to
        chat!
      </Text>
      {/* <Text fontSize="md" fontWeight="bold" mb={10}>
        Here you can find a list of mentors who are supporting the program this
        summer. Feel free to reach out to them for advice, guidance, or just to
        chat!
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
      </VStack> */}
    </Box>
  );
}

export default Directory;
