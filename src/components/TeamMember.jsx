import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

const TeamMember = ({ headshot, name, title, bio }) => {
  return (
    <Box
      position="relative"
      p="4px"
      bgGradient="linear(to-r, pink.500, orange.500)"
      borderRadius="lg"
      borderWidth={3}
      m={5}
      overflow="hidden" // Prevents content from spilling outside the box
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="white"
        opacity={0.7}
        borderRadius="lg"
      />
      <VStack spacing={4} p={4} position="relative" zIndex={1} align="stretch">
        <Image
          src={headshot}
          borderRadius="full"
          boxSize={["75px", "100px", "150px"]} // Responsive image size
          objectFit="cover"
          mx="auto"
        />
        <Text
          fontSize={["sm", "md", "lg"]} // Responsive font sizes
          fontWeight="bold"
          textAlign="center"
          textColor="black"
          noOfLines={1} // Ensures text doesn't wrap
        >
          {name}
        </Text>
        <Text
          fontSize={["xs", "sm", "md"]} // Responsive font sizes
          fontWeight="bold"
          textAlign="center"
          textColor="black"
          noOfLines={1} // Ensures text doesn't wrap
        >
          {title}
        </Text>
        <Text
          fontSize={["xs", "sm"]} // Responsive font sizes
          textAlign="center"
          textColor="black"
          overflow="hidden" // Adds hidden overflow
          wordWrap="break-word" // Ensures long words don't spill out
        >
          {bio}
        </Text>
      </VStack>
    </Box>
  );
};

export default TeamMember;
