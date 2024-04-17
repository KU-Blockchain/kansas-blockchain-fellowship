import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

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
      position="relative"
      bgGradient="linear(to-r, orange.500, pink.300)"
      borderRadius="lg"
      borderWidth={3}
      m={3}
      maxWidth="100%" // Use max-width to constrain the width of the card
      w="full" // Use the full width of the parent
      minH="500px" // Minimum height to accommodate the content
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
      <VStack
        p={4}
        position="relative"
        zIndex={1}
        align="stretch"
        spacing={3}
        height="100%" // Use 100% of parent height
        justifyContent="space-between" // Distribute space between items
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="100%"
          maxW="150px"
          objectFit="cover"
          mx="auto"
        />
        <Image
          src={company_logo}
          borderRadius="full"
          boxSize="100%"
          maxW="70px"
          objectFit="cover"
          mx="auto"
        />
        <Text
          mt={2}
          fontSize={["sm", "md"]}
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {name}
        </Text>
        <Text
          fontSize={["xs", "sm"]}
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {title}
        </Text>
        <Text
          fontSize={["xs", "sm"]}
          textAlign="center"
          textColor="black"
          noOfLines={4} // Limit the number of lines to maintain consistent height
        >
          {shortBio}
        </Text>
        {moreImages && moreImages.length > 0 && (
          <Box
            mt={4}
            display="flex"
            justifyContent="center" // Center the images
            alignItems="center"
            width="100%"
          >
            {moreImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                height="50px" // Set consistent height for logos
                objectFit="contain" // Maintain aspect ratio of the logos
                mx={2} // Margin on the x-axis to bring logos closer
              />
            ))}
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Mentor;
