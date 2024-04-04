import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import curriculum from "../images/curriculum.png";

function Curriculum() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        Curriculum
      </Text>
      <Text
        mt={3}
        mx={8}
        fontSize="md"
        textColor="gray.300"
        ml="15vw"
        mr="15vw"
      >
        The exact curriculum will be tailored to the unique interests of the
        cohort of students admitted to the program, but will include a mix of
        lectures, workshops, and hands-on projects. Here is a preliminary
        outline:
      </Text>
      <Box
        px={5}
        mt={5} // Margin top for spacing
        width={{ base: "100%", md: "auto" }} // Use "auto" for medium and larger sizes to allow the image to define its own width
        mx="auto" // Center the Box itself if its width is "auto"
      >
        <Image
          src={curriculum}
          alt="Curriculum outline"
          objectFit="cover"
          borderRadius="xl"
          border="2px"
          borderColor="black"
          maxW="75%" // Ensure the image doesn't exceed the container's width
          display="block" // Image as block element
          mx="auto" // Margin auto to center horizontally
        />
      </Box>
    </Box>
  );
}

export default Curriculum;
