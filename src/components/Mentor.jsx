import React from "react";
import { Box, Image, Text, SimpleGrid, VStack } from "@chakra-ui/react";

const Mentor = ({
  headshot,
  name,
  company_logo,
  title,
  shortBio,
  moreImages,
}) => {
  return (
    <Box
      position="relative" // Make the parent position relative
      //p="3px" // This effectively becomes the border width
      bgGradient="linear(to-r, orange.500, pink.300)"
      borderRadius="lg"
      borderWidth={3}
      m={3}
      height="500px"
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
        // spacing={4}
        p={2}
        position="relative" // Ensure it's above the background
        zIndex={1} // Higher than the background
        height="full" // Ensure VStack takes full height of parent Box
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          mx="auto"
          pb="8px"
        />
        <Image
          src={company_logo}
          borderRadius="full"
          boxSize="70px"
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
            {shortBio}
          </Text>
        }

        {moreImages && moreImages.length > 0 && (
          <>
            <Text fontSize="sm" textColor="gray" textAlign="center">
              with experience from
            </Text>
            <SimpleGrid columns={moreImages.length} spacing={5}>
              {moreImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  height="50px"
                  width="auto"
                  objectFit="cover"
                  mx="auto"
                  borderRadius="full"
                />
              ))}
            </SimpleGrid>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Mentor;
