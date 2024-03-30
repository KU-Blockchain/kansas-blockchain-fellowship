import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const ThreeCircles = () => {
  // Define circle properties with direct CSS color values for gradients
  const circles = [
    { title: "Education", gradient: "linear(to-tr, pink.200, pink.500)" }, // Example with hex colors for pink
    { title: "Innovation", gradient: "linear(to-tl, purple.200, purple.500)" }, // Example with hex colors for purple
    { title: "Development", gradient: "linear(to-tr, blue.200, blue.500)" }, // Example with hex colors for blue
  ];

  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      {circles.map((circle, index) => (
        <Box
          key={index}
          width="40%"
          height="0"
          padding="10%"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            margin="auto"
            maxWidth="100%"
            maxHeight="100%"
            width="80%"
            height="80%"
            bgGradient={circle.gradient}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
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
        </Box>
      ))}
    </Flex>
  );
};

export default ThreeCircles;
