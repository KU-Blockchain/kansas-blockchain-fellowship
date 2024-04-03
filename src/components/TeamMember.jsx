import React from "react";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Button,
  VStack, // Added for vertical stacking
} from "@chakra-ui/react";

const TeamMember = ({ headshot, name, title, bio, moreImages, longBio }) => {
  return (
    <Box
      position="relative" // Make the parent position relative
      p="4px"
      bgGradient="linear(to-r, pink.500, orange.500)"
      borderRadius="lg"
      borderWidth={3}
      m={5}
      height="400px"
    >
      <Box
        position="absolute" // Positioned absolutely to fill the area
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="white"
        opacity={0.7} // Only apply opacity to this background layer
        borderRadius="lg"
      />
      <VStack // Use VStack for vertical alignment without affecting opacity
        spacing={4}
        p={4}
        position="relative" // Ensure it's above the background
        zIndex={1} // Higher than the background
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          mx="auto"
        />
        <Text
          mt={2}
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {name}
        </Text>
        <Text
          fontSize="sm"
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {title}
        </Text>
        {
          <Text fontSize="sm" textAlign="center" textColor="black">
            {bio}
          </Text>
        }

        {/* {moreImages && moreImages.length > 0 && (
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
        )} */}
      </VStack>
    </Box>
  );
};

export default TeamMember;
