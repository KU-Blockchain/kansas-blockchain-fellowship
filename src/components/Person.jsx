import React from "react";
import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";

const Person = ({ headshot, name, bio, moreImages }) => {
  return (
    // Outer box serves as the gradient border
    <Box
      p="2px" // This effectively becomes the border width
      bgGradient="linear(to-r, blue.500, purple.500)"
      borderRadius="lg"
      maxW="sm"
      overflow="hidden"
      m={5} // Margin to separate the cards a bit from each other or container edges
    >
      {/* Inner box contains the card content */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        bg="white"
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          mx="auto"
        />
        <Text mt={4} fontSize="xl" fontWeight="bold" textAlign="center">
          {name}
        </Text>
        <Text mt={4} fontSize="sm" textAlign="center">
          {bio}
        </Text>
        {moreImages && moreImages.length > 0 && (
          <SimpleGrid columns={moreImages.length} spacing={5} mt={4}>
            {moreImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                boxSize="100px"
                objectFit="cover"
              />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default Person;
