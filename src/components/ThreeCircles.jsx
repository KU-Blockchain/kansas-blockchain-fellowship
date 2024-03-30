import React from "react";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";

const ThreeCircles = () => {
  const circles = [
    {
      title: "Education",
      gradient: "linear(to-tr, #FFC1CC, #FF69B4)",
      borderColor: "blue.500",
    },
    {
      title: "Innovation",
      gradient: "linear(to-tl, #DA70D6, #9932CC)",
      borderColor: "pink.500",
    },
    {
      title: "Development",
      gradient: "linear(to-tr, #ADD8E6, #0000FF)",
      borderColor: "purple.500",
    },
  ];

  return (
    <>
      <Box pt={"12vh"} pb={"12vh"}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
          mb={8}
        >
          Program Pillars
        </Text>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          wrap="wrap"
        >
          {circles.map((circle, index) => (
            <AspectRatio key={index} ratio={1} width="25%">
              <Box
                bgGradient={circle.gradient}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="xl"
                // Add a semi-thick black border around each circle
                border="5px solid " // Adjust the thickness as needed
                borderColor={circle.borderColor}
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  fontSize="xl"
                >
                  {circle.title}
                </Text>
              </Box>
            </AspectRatio>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ThreeCircles;
