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
} from "@chakra-ui/react";

const TeamMember = ({ headshot, name, title, bio, moreImages, longBio }) => {
  return (
    <Box
      p="4px"
      bgGradient="linear(to-r, pink.500, orange.500)"
      borderRadius="lg"
      m={5}
      height="400px"
    >
      <Box
        borderRadius="lg"
        overflow="hidden"
        p={4}
        bg="white"
        opacity={0.7}
        height="393px"
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          mx="auto"
        />
        <Popover>
          <PopoverTrigger>
            <Box>
              <Text
                mt={2}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                textColor="black"
                cursor="pointer"
              >
                {name}
              </Text>
              <Text
                mt={2}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                textColor="black"
              >
                {title}
              </Text>
              <Text mt={2} fontSize="sm" textAlign="center" textColor="black">
                {bio}
              </Text>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              {longBio || "More detailed bio not available."}
            </PopoverBody>
          </PopoverContent>
        </Popover>
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

export default TeamMember;
