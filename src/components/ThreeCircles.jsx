import React from "react";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";

const ThreeCircles = () => {
  const circles = [
    { title: "Education", gradient: "linear(to-tr, pink.300, orange.600)" },
    { title: "Innovation", gradient: "linear(to-tr, orange.300, pink.600)" },
    { title: "Development", gradient: "linear(to-tr, pink.600, yellow.600)" },
  ];

  return (
    <>
      <Box pt={"12vh"} pb={"12vh"}>
        <Text
          fontSize={{ base: "2xl", md: "4xl" }} // Responsive font size
          fontWeight="bold"
          textAlign="center"
          color="white"
          mb={8}
        >
          Program Pillars
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap="4"
        >
          {circles.map((circle, index) => (
            <AspectRatio
              key={index}
              ratio={1}
              width={{ base: "80vw", sm: "30vw", md: "20vw", lg: "15vw" }} // More responsive steps for width
            >
              <Box
                bgGradient={circle.gradient}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="xl"
                border="4px solid black"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={{ base: "md", md: "lg", lg: "xl" }} // Responsive font size within the circle
                  p={4} // Padding to ensure text does not touch the edges
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
