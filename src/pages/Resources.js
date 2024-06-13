import React from "react";

import { Button, Box, Heading, Text, Image, Stack, HStack } from "@chakra-ui/react";

const class_lectures = [
  {
    title: "Week 0 - Orientation",
    date: "June 6, 2024",
    embed: "<iframe id='kmsembed-1_jorrrtyg' width='500' height='385' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_jorrrtyg/uiConfId/46527243/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship Week 0 - Orientation'></iframe>",
    lecture_notes: "https://docs.google.com/presentation/d/19UXVcwlc6-OJJ4ZcGLMpC977YSyab2QxtTrYilTyHxk/edit?usp=sharing",
  },
];

const supplemental_materials = [
  {
    title: "MetaMask Tutorial",
    description: "This video will walk you through how to set up a MetaMask wallet.",
    embed: "<iframe id='kmsembed-1_fms4ifcb' width='400' height='285' src='https://mediahub.ku.edu/embed/secure/iframe/entryId/1_fms4ifcb/uiConfId/45147491/st/0' class='kmsembed' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' referrerPolicy='no-referrer-when-downgrade' sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation' frameborder='0' title='Kansas Blockchain Fellowship - MetaMask Tutorial'></iframe>",
    link: "",
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
                <Box rounded="lg" bg="gray.400" align="center" my={5} mx={20} p={5} key={lecture.title}>
                  <Heading>{lecture.title}</Heading>
                  <Text size="sm">{lecture.date}</Text>
                  <Box
                    dangerouslySetInnerHTML={{ __html: lecture.embed }}
                    mt={5}
                  ></Box>
                  <Button>
                    <a href={lecture.lecture_notes}>Class Slide Deck</a>
                  </Button>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box w="40%">
            <Heading>Supplemental Materials</Heading>
            <Stack>
              {supplemental_materials.map((material) => (
                <Box rounded="lg" bg="gray.400" align="center" my={5} mx={10} p={5} key={material.title}>
                  <Heading>{material.title}</Heading>
                  <Text size="xs">{material.description}</Text>
                  <Box
                    dangerouslySetInnerHTML={{ __html: material.embed }}
                    mt={5}
                  ></Box>
                  { material.link &&
                  <Button>
                    <a href={material.link}>Link</a>
                  </Button>
                  }
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
