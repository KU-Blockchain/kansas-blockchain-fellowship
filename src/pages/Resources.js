import React from "react";

import {
  Button,
  Box,
  Heading,
  Text,
  Link,
  Stack,
  HStack,
} from "@chakra-ui/react";

const class_lectures = [
  {
    title: "Week 3 - DeFi + Regulation",
    date: "June 20, 2024",
    embed:
      "<iframe id='kmsembed-1_lhh1sxrk' width='500' height='385' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_lhh1sxrk/uiConfId/45147491/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship Week 2 - DeFi and Regulation'></iframe>",
    lecture_notes:
      "https://docs.google.com/presentation/d/1Iuu6UgQOxHsGsS6EZIO7np5LlPO2A7tDGVYHriSR-AM/edit?usp=sharing",
  },
  {
    title: "Week 2 - Applications of Blockchain",
    date: "June 20, 2024",
    embed:
      "<iframe id='kmsembed-1_ugitq9z1' width='500' height='385' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_ugitq9z1/uiConfId/45147491/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship Week 2 - Applications of Blockchain'></iframe>",
    lecture_notes:
      "https://docs.google.com/presentation/d/1NNgdhRQx8bwZ-ukPUasiqAQSi2D0ygvR2zpsZMoUyFk/edit?usp=sharing",
  },
  {
    title: "Week 1 - Basics of Blockchain",
    date: "June 13, 2024",
    embed: "<iframe id='kmsembed-1_isz4j0s4' width='500' height='385' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_isz4j0s4/uiConfId/45147491/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship Week 1 - Basics of Blockchain'></iframe>",
    lecture_notes: "https://docs.google.com/presentation/d/1gLhyHVXHAL1_CB1GORV1ETYatQHtWxElRAumrTQUtgE/edit?usp=sharing",
  },
  {
    title: "Week 0 - Orientation",
    date: "June 6, 2024",
    embed:
      "<iframe id='kmsembed-1_jorrrtyg' width='500' height='385' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_jorrrtyg/uiConfId/46527243/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship Week 0 - Orientation'></iframe>",
    lecture_notes:
      "https://docs.google.com/presentation/d/19UXVcwlc6-OJJ4ZcGLMpC977YSyab2QxtTrYilTyHxk/edit?usp=sharing",
  },
  
];

const supplemental_materials = [
  {
    title: "MetaMask Tutorial",
    description:
      "This video will walk you through how to set up a MetaMask wallet.",
    embed:
      "<iframe id='kmsembed-1_fms4ifcb' width='300' height='185' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_fms4ifcb/uiConfId/45147491/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship - MetaMask Tutorial'></iframe>",
    link: "",
  },
  {
    title: "2016 DAO Hack + ETH Fork",
    description: "Mentioned by Joe in class.",
    // embed: "<iframe id='kmsembed-1_fms4ifcb' width='400' height='285' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_fms4ifcb/uiConfId/45147491/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship - MetaMask Tutorial'></iframe>",
    link: "https://www.coindesk.com/learn/understanding-the-dao-attack/",
    buttonLabel: "Read Article",
  },
  {
    title: "Simple Analogy for Blockchain",
    description:
      "Here, the XRPL Learning Portal analogizes blockchain as a system for managing village barters and IOUs.",
    link: "https://learn.xrpl.org/course/blockchain-and-crypto-basics/lesson/what-is-a-blockchain/",
    buttonLabel: "Read Article",
  },
  {
    title: "Smart Contracts Explained",
    description:
      "Amazing video explanation of smart contracts with clear examples of use-cases.",
    link: "https://learn.xrpl.org/course/blockchain-and-crypto-basics/lesson/what-is-a-blockchain/",
    buttonLabel: "Watch Video",
  },
  {
    title: "Outline of Types of Blockchains",
    description: "Article clarifying differences between types of blockchains.",
    link: "https://www.techopedia.com/4-types-of-blockchain-explained-a-complete-guide",
    buttonLabel: "Read Article",
  },
];

function Resources() {
  return (
    <>
      <Box textAlign="center" py={10}>
        <Text fontSize="xxxl" fontWeight="bold" mb={10}>
          Resources
        </Text>
        <HStack spacing={0} mx="10" align="top">
          <Box w="60%">
            <Heading size="md">Class Lectures</Heading>
            <Stack>
              {class_lectures.map((lecture) => (
                <Box
                  rounded="lg"
                  bg="gray.400"
                  align="center"
                  my={5}
                  mx={20}
                  p={5}
                  key={lecture.title}
                >
                  <Heading>{lecture.title}</Heading>
                  <Text size="sm">{lecture.date}</Text>
                  <Box
                    dangerouslySetInnerHTML={{ __html: lecture.embed }}
                    mt={5}
                  ></Box>
                  <Button
                    color="black"
                    as={Link}
                    href={lecture.lecture_notes}
                    isExternal
                    colorScheme="blue"
                    variant="outline"
                  >
                    Class Slide Deck
                  </Button>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box w="40%">
            <Heading>Supplemental Materials</Heading>
            <Stack>
              {supplemental_materials.map((material, index) => (
                <Box
                  rounded="lg"
                  bg="gray.400"
                  align="center"
                  my={5}
                  mx={10}
                  p={5}
                  key={material.title}
                >
                  <Heading>{material.title}</Heading>
                  <Text color="black" fontSize="md" px="5px">
                    {material.description}
                  </Text>
                  <Box
                    dangerouslySetInnerHTML={{ __html: material.embed }}
                    mt={5}
                  ></Box>
                  {material.link && (
                    <Button
                      color="black"
                      key={index}
                      as={Link}
                      href={material.link}
                      isExternal
                      colorScheme="blue"
                      variant="outline"
                    >
                      {material.buttonLabel}
                    </Button>
                  )}
                </Box>
              ))}
            </Stack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}

export default Resources;
