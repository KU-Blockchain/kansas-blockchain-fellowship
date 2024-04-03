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
      position="relative"
      bgGradient="linear(to-r, orange.500, pink.300)"
      borderRadius="lg"
      borderWidth={3}
      m={3}
      maxWidth="100%" // Use max-width to constrain the width of the card
      w="full" // Use the full width of the parent
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
        p={4} // Use scalable units for padding
        position="relative"
        zIndex={1}
        align="stretch"
        spacing={3} // Reduce the spacing to a smaller value
      >
        <Image
          src={headshot}
          borderRadius="full"
          boxSize="100%" // Make the image responsive
          maxW="150px" // Constrain the maximum width
          objectFit="cover"
          mx="auto"
        />
        <Image
          src={company_logo}
          borderRadius="full"
          boxSize="100%" // Make the image responsive
          maxW="70px" // Constrain the maximum width
          objectFit="cover"
          mx="auto"
        />
        <Text
          mt={2}
          fontSize={["sm", "md"]} // Responsive font sizes
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {name}
        </Text>
        <Text
          fontSize={["xs", "sm"]} // Responsive font sizes
          fontWeight="bold"
          textAlign="center"
          textColor="black"
        >
          {title}
        </Text>
        <Text
          fontSize={["xs", "sm"]} // Responsive font sizes
          textAlign="center"
          textColor="black"
        >
          {shortBio}
        </Text>
        {moreImages && moreImages.length > 0 && (
          <>
            <Text
              fontSize={["xs", "sm"]} // Responsive font sizes
              textColor="gray"
              textAlign="center"
            >
              with experience from
            </Text>
            <Box
              mt={4} // Margin top for spacing from the previous element
              display="flex" // Use flexbox for centering
              justifyContent="center" // Center horizontally in the flex container
              alignItems="center" // Center vertically in the flex container
              height="auto" // Height auto for aspect ratio
              width="100%" // Take up full width to allow centering inside the parent VStack
            >
              <Image
                src={moreImages[0]}
                height="50px" // Height auto to maintain aspect ratio
                objectFit="contain" // Image will scale to fit the box, maintaining aspect ratio
              />
            </Box>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Mentor;
