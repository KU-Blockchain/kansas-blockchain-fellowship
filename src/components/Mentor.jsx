import React from "react";
import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";

const Mentor = ({ headshot, name, company_logo, title, bio, moreImages }) => {
  return (
    // Outer box serves as the gradient border
    <Box
      p="3px" // This effectively becomes the border width
      bgGradient="linear(to-r, orange.500, pink.300)"
      borderRadius="lg"
      m={3}
      height={"500px"}
    >
    
      <Box
        borderRadius="lg"
        overflow="hidden"
        p={4}
        bg="white"
        height={"494px"}
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          mx="auto"
          paddingBottom="8px"
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
          textColor={"black"}
        >
          {name}
        </Text>
        <Text
          mt={2}
          fontSize="sm"
          fontWeight="bold"
          textAlign="center"
          textColor={"black"}
        >
          {title}
        </Text>
        <Text mt={2} fontSize="sm" textAlign="center" textColor={"black"}>
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
                mx="auto"
                borderRadius="full"
              />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default Mentor;
